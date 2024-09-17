export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface CryptoOrder {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: CryptoOrderStatus;
}
