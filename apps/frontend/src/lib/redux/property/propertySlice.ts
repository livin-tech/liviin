import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
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

interface Property {
    _id?: string;
    name: string;
    type: string;
    rooms: number;
    bathrooms: number;
    hasLivingRoom: boolean;
    hasDiningRoom: boolean;
    hasHallRoom: boolean;
    hasFamilyRoom: boolean;
    hasKitchen: boolean;
    hasServiceRoom: boolean;
    hasLaundryRoom: boolean;
    hasBalcony: boolean;
  hasGarden: boolean;
    title: string;
    description: string;
    price: number;
    location: string;
    ownerId: string;    // New field
}

// Define the state type
interface PropertyState {
  properties: Property[];
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
export const fetchProperties = createAsyncThunk('properties/fetchProperties', async () => {
  const response = await axios.get<Property[]>(`${API_BASE_URL}/properties`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const createProperty = createAsyncThunk(
    'properties/createProperty',
    async (propertyData: Property) => {
        const formattedData = {
            ...propertyData,
            rooms: Number(propertyData.rooms),
            bathrooms: Number(propertyData.bathrooms),
            price: Number(propertyData.price),
            owner: propertyData.ownerId
          };
        try {
            const response = await axios.post(`${API_BASE_URL}/properties`, formattedData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                console.error('API Error:', error.response.data); // Log the error response
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
      (state, action: PayloadAction<Property[]>) => {
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
      builder.addCase(createProperty.fulfilled, (state, action: PayloadAction<Property>) => {
        state.loading = false;
        state.properties.push(action.payload); // Add the newly created property to the list
      });
      builder.addCase(createProperty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create property';
      });
  },
});

export default propertySlice.reducer;
