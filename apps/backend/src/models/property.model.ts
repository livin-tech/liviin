import mongoose, { Document, Schema } from 'mongoose';

export interface IProperty extends Document {
  name: string;
  type: string;
  rooms: number;
  bathrooms: number;
  livingRoom: boolean;
  diningRoom: boolean;
  familyRoom: boolean;
  hallRoom: boolean;
  kitchen: boolean;
  serviceRoom: boolean;
  laundryRoom: boolean;
  balcony: boolean;
  garden: boolean;
  title: string;
  description: string;
  price: number;
  location: string;
  owner: mongoose.Schema.Types.ObjectId; // reference to the User model
}

const propertySchema: Schema<IProperty> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  livingRoom: {
    type: Boolean,
    required: true,
  },
  diningRoom: {
    type: Boolean,
    required: true,
  },
  familyRoom: {
    type: Boolean,
    required: true,
  },
  hallRoom: {
    type: Boolean,
    required: true,
  },
  kitchen: {
    type: Boolean,
    required: true,
  },
  serviceRoom: {
    type: Boolean,
    required: true,
  },
  laundryRoom: {
    type: Boolean,
    required: true,
  },
  balcony: {
    type: Boolean,
    required: true,
  },
  garden: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
});

export const PropertyModel = mongoose.model<IProperty>('Property', propertySchema);
