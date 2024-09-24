import { Card } from '@mui/material';
import { PropertyItem } from '../../../../models/property_item';
import RecentOrdersTable from './PropertyItemsTable';
import { subDays } from 'date-fns';

function PropertyItems() {
  const propertyItems: PropertyItem[] = [
    {
      id: '1',
      name: 'John Doe',
      city: 'New York',
      address: '123 Main St',
    },
    {
      id: '2',
      name: 'Jane Smith',
      city: 'Los Angeles',
      address: '456 Elm St',
    },
    {
      id: '3',
      name: 'Robert Johnson',
      city: 'Chicago',
      address: '789 Oak St',
    },
    {
      id: '4',
      name: 'Emily Davis',
      city: 'Houston',
      address: '101 Maple Ave',
    },
    {
      id: '5',
      name: 'Michael Brown',
      city: 'Phoenix',
      address: '202 Pine St',
    },
    {
      id: '6',
      name: 'Linda Williams',
      city: 'Philadelphia',
      address: '303 Birch St',
    },
    {
      id: '7',
      name: 'David Wilson',
      city: 'San Antonio',
      address: '404 Cedar Rd',
    },
    {
      id: '8',
      name: 'Sarah Martinez',
      city: 'San Diego',
      address: '505 Spruce St',
    },
    {
      id: '9',
      name: 'James Taylor',
      city: 'Dallas',
      address: '606 Palm Ave',
    },
    {
      id: '10',
      name: 'Patricia Anderson',
      city: 'San Jose',
      address: '707 Oak Grove',
    }
  ];
  

  return (
    <Card>
      <RecentOrdersTable propertyItems={propertyItems} />
    </Card>
  );
}

export default PropertyItems;
