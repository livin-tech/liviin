import { PropertyModel, IProperty } from '../models/property.model';

export class PropertyRepository {
  // Create a new property
  async createProperty(propertyData: Partial<IProperty>): Promise<IProperty> {
    const property = new PropertyModel(propertyData);
    return await property.save();
  }

  // Find a property by ID
  async findPropertyById(propertyId: string): Promise<IProperty | null> {
    return PropertyModel.findById(propertyId).populate('owner');
  }

  // Get all properties
  async getAllProperties(): Promise<IProperty[]> {
    return PropertyModel.find().populate('owner');
  }

  // Update a property
  async updateProperty(propertyId: string, updateData: Partial<IProperty>): Promise<IProperty | null> {
    return PropertyModel.findByIdAndUpdate(propertyId, updateData, { new: true }).populate('owner');
  }

  // Delete a property
  async deleteProperty(propertyId: string): Promise<IProperty | null> {
    return PropertyModel.findByIdAndDelete(propertyId);
  }
}