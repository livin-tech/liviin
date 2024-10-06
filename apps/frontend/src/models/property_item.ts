export interface PropertyItem {
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
  ownerId: string;
}
