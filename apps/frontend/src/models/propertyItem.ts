export interface PropertyItem {
  _id?: string;
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
  owner?: Owner;
  ownerId?: string;
}

export interface Owner {
  email?: string;
  firstName?: string;
  lastName?: string;
  hasOnboarded?: boolean;
  role?: string;
  subscriptionStatus?: string;
  _id?: string;
}
