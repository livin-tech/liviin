import mongoose, { Schema, Document } from 'mongoose';

export interface IProperty extends Document {
  title: string;
  description: string;
  price: number;
  location: string;
  owner: string; // User ID
}

const propertySchema: Schema<IProperty> = new mongoose.Schema({
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
    type: String,
    required: true,
  },
});

export const PropertyModel = mongoose.model<IProperty>('Property', propertySchema);
