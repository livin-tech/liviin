export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface CryptoOrder {
  id: string;
  name: string;
  email: string;
  city: string;
  phone: string;
  status: CryptoOrderStatus;
}
