import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      city: 'New York',
      phone: '123-456-7890',
      status: 'completed',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      city: 'Los Angeles',
      phone: '987-654-3210',
      status: 'completed',
    },
    {
      id: '3',
      name: 'Robert Johnson',
      email: 'robert.johnson@example.com',
      city: 'Chicago',
      phone: '456-789-0123',
      status: 'completed',
    },
    {
      id: '4',
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      city: 'Houston',
      phone: '321-654-0987',
      status: 'completed',
    },
    {
      id: '5',
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      city: 'Phoenix',
      phone: '654-321-4567',
      status: 'completed',
    },
    {
      id: '6',
      name: 'Linda Williams',
      email: 'linda.williams@example.com',
      city: 'Philadelphia',
      phone: '789-012-3456',
      status: 'completed',
    },
    {
      id: '7',
      name: 'David Wilson',
      email: 'david.wilson@example.com',
      city: 'San Antonio',
      phone: '012-345-6789',
      status: 'completed',
    },
    {
      id: '8',
      name: 'Sarah Martinez',
      email: 'sarah.martinez@example.com',
      city: 'San Diego',
      phone: '234-567-8901',
      status: 'completed',
    },
    {
      id: '9',
      name: 'James Taylor',
      email: 'james.taylor@example.com',
      city: 'Dallas',
      phone: '345-678-9012',
      status: 'completed',
    },
    {
      id: '10',
      name: 'Patricia Anderson',
      email: 'patricia.anderson@example.com',
      city: 'San Jose',
      phone: '567-890-1234',
      status: 'completed',
    }
  ];

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOrders;
