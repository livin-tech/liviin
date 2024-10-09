import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { PropertyItem } from 'apps/frontend/src/models/property_item';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface Owner {
  role: string;
  subscriptionStatus: string;
  hasOnboarded: boolean;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

// Define the state type
interface PropertyState {
  properties: PropertyItem[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: PropertyState = {
  properties: [],
  loading: false,
  error: null,
};

// Define token (assuming you have it defined similarly)
const token = 'myauthtoken';

// Thunk to fetch properties
export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async () => {
    const response = await axios.get<PropertyItem[]>(
      `${API_BASE_URL}/properties`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const createProperty = createAsyncThunk(
  'properties/createProperty',
  async (propertyData: PropertyItem) => {
    const formattedData = {
      ...propertyData,
      rooms: Number(propertyData.rooms),
      bathrooms: Number(propertyData.bathrooms),
      price: Number(propertyData.price),
      owner: propertyData.ownerId,
    };
    try {
      const response = await axios.post(
        `${API_BASE_URL}/properties`,
        formattedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.error('API Error:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
      throw error;
    }
  }
);

export const editProperty = createAsyncThunk(
  'properties/editProperty',
  async ({
    propertyData,
    propertyId,
  }: {
    propertyData: PropertyItem;
    propertyId: string;
  }) => {
    const formattedData = {
      ...propertyData,
      rooms: Number(propertyData.rooms),
      bathrooms: Number(propertyData.bathrooms),
      price: Number(propertyData.price),
      owner: propertyData.owner?._id,
    };

    try {
      const response = await axios.put(
        `${API_BASE_URL}properties/${propertyId}`,
        formattedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.error('API Error:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
      throw error;
    }
  }
);

export const deleteProperty = createAsyncThunk(
  'properties/deleteProperty',
  async (propertyId: string) => {
    try {
      await axios.delete(`${API_BASE_URL}/properties/${propertyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return propertyId;
    } catch (error: any) {
      if (error.response) {
        console.error('API Error:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
      throw error;
    }
  }
);

// Create the slice
const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetchProperties
    builder.addCase(fetchProperties.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchProperties.fulfilled,
      (state, action: PayloadAction<PropertyItem[]>) => {
        state.loading = false;
        state.properties = action.payload;
      }
    );
    builder.addCase(fetchProperties.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch properties';
    });

    //create property
    builder.addCase(createProperty.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      createProperty.fulfilled,
      (state, action: PayloadAction<PropertyItem>) => {
        state.loading = false;
        state.properties.push(action.payload);
      }
    );
    builder.addCase(createProperty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to create property';
    });

    // Handle editProperty
    builder.addCase(editProperty.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      editProperty.fulfilled,
      (state, action: PayloadAction<PropertyItem>) => {
        state.loading = false;
        const index = state.properties.findIndex(
          (property) => property._id === action.payload._id
        );
        if (index !== -1) {
          state.properties[index] = action.payload;
        }
      }
    );
    builder.addCase(editProperty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to edit property';
    });

    // Delete property
    builder.addCase(deleteProperty.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      deleteProperty.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.properties = state.properties.filter(
          (property) => property._id !== action.payload
        );
      }
    );
    builder.addCase(deleteProperty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to delete property';
    });
  },
});

export default propertySlice.reducer;
