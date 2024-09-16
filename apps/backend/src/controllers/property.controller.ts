import { Request, Response } from "express";
import { PropertyRepository } from "../repository/property.repository";

export class PropertyController {
  constructor(private propertyRepository = new PropertyRepository()) {}

  // Create a new property
  async createProperty(req: Request, res: Response) {
    try {
      const {
        name,
        type,
        rooms,
        bathrooms,
        livingRoom,
        diningRoom,
        familyRoom,
        hallRoom,
        kitchen,
        serviceRoom,
        laundryRoom,
        balcony,
        garden,
        title,
        description,
        price,
        location,
        owner // The owner should be the user ID
      } = req.body;

      const property = await this.propertyRepository.createProperty({
        name,
        type,
        rooms,
        bathrooms,
        livingRoom,
        diningRoom,
        familyRoom,
        hallRoom,
        kitchen,
        serviceRoom,
        laundryRoom,
        balcony,
        garden,
        title,
        description,
        price,
        location,
        owner // Passing user ID as reference
      });

      return res.status(201).json(property);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  // Get all properties
  async getProperties(req: Request, res: Response) {
    try {
      const properties = await this.propertyRepository.getAllProperties();
      return res.json(properties);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  // Get property by ID
  async getPropertyById(req: Request, res: Response) {
    try {
      const property = await this.propertyRepository.findPropertyById(req.params.id);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }
      return res.json(property);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  // Update a property
  async updateProperty(req: Request, res: Response) {
    try {
      const {
        name,
        type,
        rooms,
        bathrooms,
        livingRoom,
        diningRoom,
        familyRoom,
        hallRoom,
        kitchen,
        serviceRoom,
        laundryRoom,
        balcony,
        garden,
        title,
        description,
        price,
        location,
        owner // The owner should be the user ID
      } = req.body;

      const property = await this.propertyRepository.updateProperty(req.params.id, {
        name,
        type,
        rooms,
        bathrooms,
        livingRoom,
        diningRoom,
        familyRoom,
        hallRoom,
        kitchen,
        serviceRoom,
        laundryRoom,
        balcony,
        garden,
        title,
        description,
        price,
        location,
        owner // Passing user ID as reference
      });

      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }
      return res.json(property);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  // Delete a property
  async deleteProperty(req: Request, res: Response) {
    try {
      const property = await this.propertyRepository.deleteProperty(req.params.id);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
