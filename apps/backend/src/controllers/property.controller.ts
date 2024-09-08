import { Request, Response } from "express";
import { PropertyRepository } from "../repository/property.repository";

export class PropertyController {
  constructor(private propertyRepository = new PropertyRepository()) {}

  async createProperty(req: Request, res: Response) {
    try {
      const { title, description, price, location, owner } = req.body;

      const property = await this.propertyRepository.createProperty({
        title,
        description,
        price,
        location,
        owner,
      });

      return res.status(201).json(property);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async getProperties(req: Request, res: Response) {
    try {
      const properties = await this.propertyRepository.getAllProperties();
      return res.json(properties);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

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

  async updateProperty(req: Request, res: Response) {
    try {
      const { title, description, price, location, owner } = req.body;
      const property = await this.propertyRepository.updateProperty(req.params.id, {
        title,
        description,
        price,
        location,
        owner,
      });
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }
      return res.json(property);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

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
