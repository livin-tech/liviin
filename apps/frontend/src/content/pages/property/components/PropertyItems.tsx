import { Card } from '@mui/material';
import { PropertyItem } from '../../../../models/property_item';
import RecentOrdersTable from './PropertyItemsTable';
import { subDays } from 'date-fns';
import PropertyItemsTable from './PropertyItemsTable';

function PropertyItems() {
  const propertyItems: PropertyItem[] = [
    {
      id: '1',
      name: 'Ocean View Apartment',
      type: 'Apartment',
      rooms: 3,
      bathrooms: 2,
      livingRoom: true,
      diningRoom: true,
      hallRoom: false,
      familyRoom: false,
      kitchen: true,
      serviceRoom: false,
      laundaryRoom: true,
      balcony: true,
    },
    {
      id: '2',
      name: 'Downtown Loft',
      type: 'Loft',
      rooms: 2,
      bathrooms: 1,
      livingRoom: true,
      diningRoom: false,
      hallRoom: false,
      familyRoom: false,
      kitchen: true,
      serviceRoom: false,
      laundaryRoom: false,
      balcony: false,
    },
    {
      id: '3',
      name: 'Suburban House',
      type: 'House',
      rooms: 4,
      bathrooms: 3,
      livingRoom: true,
      diningRoom: true,
      hallRoom: true,
      familyRoom: true,
      kitchen: true,
      serviceRoom: true,
      laundaryRoom: true,
      balcony: false,
    },
    {
      id: '4',
      name: 'Mountain Cabin',
      type: 'Cabin',
      rooms: 2,
      bathrooms: 1,
      livingRoom: true,
      diningRoom: false,
      hallRoom: false,
      familyRoom: false,
      kitchen: true,
      serviceRoom: false,
      laundaryRoom: true,
      balcony: true,
    },
    {
      id: '5',
      name: 'Luxury Villa',
      type: 'Villa',
      rooms: 6,
      bathrooms: 5,
      livingRoom: true,
      diningRoom: true,
      hallRoom: true,
      familyRoom: true,
      kitchen: true,
      serviceRoom: true,
      laundaryRoom: true,
      balcony: true,
    },
  ];

  return (
    <Card>
      <PropertyItemsTable propertyItems={propertyItems} />
    </Card>
  );
}

export default PropertyItems;
