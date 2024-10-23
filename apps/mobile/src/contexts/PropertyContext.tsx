import React, { createContext, useContext, ReactNode } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/src/services';

export interface Property {
  type: string;
  rooms: number;
  size: number;
  meter?: string;
  bathrooms: number;
  hasLivingRoom: boolean;
  hasDiningRoom: boolean;
  hasFamilyRoom: boolean;
  hasHallRoom: boolean;
  hasKitchen: boolean;
  hasServiceRoom: boolean;
  hasLaundryRoom: boolean;
  hasBalcony: boolean;
  hasGarden: boolean;
  title: string;
  description: string;
  price: number;
  location: string;
  owner: string;
}

interface PropertyContextType {
  createProperty: (property: Property) => Promise<void>;
  updateProperty: (id: string, property: Property) => Promise<void>;
  deleteProperty: (id: string) => Promise<void>;
}

// Create the context with default values
const PropertyContext = createContext<PropertyContextType | undefined>(
  undefined
);

// Hook to use the Property context
export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
};

// PropertyProvider component that provides the context to the children components
export const PropertyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const queryClient = useQueryClient();

  // Create Property Mutation
  const createProperty = useMutation({
    mutationFn: async (property: Property) => {
      const response = await api.post('/properties', property);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['properties']); // Invalidate property list query after creation
    },
  });

  // Update Property Mutation
  const updateProperty = useMutation({
    mutationFn: async (property: Property) => {
      const response = await api.put(`/properties/${property.owner}`, property);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['properties']); // Invalidate property list query after update
    },
  });

  // Delete Property Mutation
  const deleteProperty = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/properties/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['properties']); // Invalidate property list query after deletion
    },
  });

  return (
    <PropertyContext.Provider
      value={{
        createProperty: createProperty.mutateAsync,
        updateProperty: updateProperty.mutateAsync,
        deleteProperty: deleteProperty.mutateAsync,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
