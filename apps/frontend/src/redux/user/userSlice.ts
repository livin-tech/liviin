import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Define the User type
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

// Define the state type
interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const token = 'myauthtoken';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get<User[]>(`${API_BASE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, updatedData }: { id: string; updatedData: Partial<User> }) => {
    const response = await axios.put<User>(
      `${API_BASE_URL}/users/${id}`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id: string) => {
    await axios.delete(`${API_BASE_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return id;
  }
);

export const createUser = createAsyncThunk(
  'auth/createUser',
  async (
    newUser: {
      email: string;
      firstName: string;
      lastName: string;
      phoneNumber?: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );
      const user = userCredential.user;

      if (user) {
        const userPayload = {
          email: newUser.email,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          phoneNumber: newUser.phoneNumber || '',
          // firebaseID: user.uid
        };
        const response = await axios.post(`${API_BASE_URL}users`, userPayload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return response.data;
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetchUsers
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch users';
    });

    // Handle updateUser
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      updateUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        const updatedUser = action.payload;
        const index = state.users.findIndex(
          (user) => user.id === updatedUser.id
        );
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
      }
    );
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to update user';
    });

    // Handle deleteUser
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      deleteUser.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);
      }
    );
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to delete user';
    });

    // Handle createUser
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      createUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.users.push(action.payload); // Add the new user to the list
      }
    );
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to create user';
    });
  },
});

export default userSlice.reducer;
