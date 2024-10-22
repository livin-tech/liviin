// import React, { createContext, useContext, useState, ReactNode } from 'react';
// import { api } from '../services';

// // Define Property Data structure based on your payload model
// export interface Property {
//   type: string;
//   rooms: number;
//   size: number;
//   meter?: string;
//   bathrooms: number;
//   hasLivingRoom: boolean;
//   hasDiningRoom: boolean;
//   hasFamilyRoom: boolean;
//   hasHallRoom: boolean;
//   hasKitchen: boolean;
//   hasServiceRoom: boolean;
//   hasLaundryRoom: boolean;
//   hasBalcony: boolean;
//   hasGarden: boolean;
//   title: string;
//   description: string;
//   price: number;
//   location: string;
//   owner: string; // Assumes the owner's ID is being stored here
// }

// // Define the context type
// interface PropertyContextType {
//   properties: Property[];
//   createProperty: (property: Property) => Promise<void>;
//   getProperties: () => Promise<void>;
//   updateProperty: (id: string, property: Property) => Promise<void>;
//   deleteProperty: (id: string) => Promise<void>;
// }

// // Create the context with default values
// const PropertyContext = createContext<PropertyContextType | undefined>(
//   undefined
// );

// // Hook to use the Property context
// export const useProperty = () => {
//   const context = useContext(PropertyContext);
//   if (!context) {
//     throw new Error('useProperty must be used within a PropertyProvider');
//   }
//   return context;
// };

// // PropertyProvider component that provides the context to the children components
// export const PropertyProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [properties, setProperties] = useState<Property[]>([]);

//   const apiBaseUrl = 'http://localhost:80/api/properties';

//   // Create Property
//   const createProperty = async (property: Property) => {
//     try {
//       const response = await api.post('/properties', property);
//       setProperties((prev) => [...prev, response?.data]);
//       console.log('Property created:', response?.data);
//     } catch (error) {
//       console.error('Error creating property:', error);
//     }
//   };

//   // Get Properties (Read)
//   const getProperties = async () => {
//     try {
//       const response = await api.get(apiBaseUrl);
//       setProperties(response.data);
//       console.log('Fetched properties:', response.data);
//     } catch (error) {
//       console.error('Error fetching properties:', error);
//     }
//   };

//   // Update Property
//   const updateProperty = async (id: string, property: Property) => {
//     // try {
//     //   const response = await api.put(`${apiBaseUrl}/${id}`, property);
//     //   setProperties((prev) =>
//     //     prev.map((prop) => (prop.owner === id ? response.data : prop))
//     //   );
//     //   console.log('Property updated:', response.data);
//     // } catch (error) {
//     //   console.error('Error updating property:', error);
//     // }
//   };

//   // Delete Property
//   const deleteProperty = async (id: string) => {
//     // try {
//     //   await api.delete(`${apiBaseUrl}/${id}`);
//     //   setProperties((prev) => prev.filter((prop) => prop.owner !== id));
//     //   console.log('Property deleted');
//     // } catch (error) {
//     //   console.error('Error deleting property:', error);
//     // }
//   };

//   return (
//     <PropertyContext.Provider
//       value={{
//         properties,
//         createProperty,
//         getProperties,
//         updateProperty,
//         deleteProperty,
//       }}
//     >
//       {children}
//     </PropertyContext.Provider>
//   );
// };

import React, { createContext, useContext, ReactNode } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../services';

// Define Property Data structure
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
  owner: string; // Assumes the owner's ID is being stored here
}

// Define the context type
interface PropertyContextType {
  properties: Property[] | undefined;
  isLoadingProperties: boolean;
  errorFetchingProperties: any;
  createProperty: (property: Property) => Promise<void>;
  updateProperty: (id: string, property: Property) => Promise<void>;
  deleteProperty: (id: string) => Promise<void>;
  getProperties: () => void;
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

  // Fetch Properties (Read)
  const {
    data: properties,
    isLoading: isLoadingProperties,
    error: errorFetchingProperties,
  } = useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      const response = await api.get('/properties');
      return response.data;
    },
    initialData: [],
  });

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
        properties,
        isLoadingProperties,
        errorFetchingProperties,
        createProperty: createProperty.mutateAsync,
        updateProperty: updateProperty.mutateAsync,
        deleteProperty: deleteProperty.mutateAsync,
        getProperties: () => queryClient.invalidateQueries(['properties']), // Refetch properties when called
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
