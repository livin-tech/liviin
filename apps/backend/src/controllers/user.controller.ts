import { Request, Response } from "express";
import { z } from "zod";

import logger from "../config/logger";
import { UserRepository } from "../repository/user.repository";

// Define Zod schema for user validation
const userSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
  subscriptionStatus: z.enum(["essential", "pro"]).optional(),
  role: z.enum(["user", "admin"]).optional(),
});

export class UserController {
  constructor(private userRepository = new UserRepository()) {}

  async createUser(req: Request, res: Response) {
    try {
      // Validate the request body using the Zod schema
      const validatedData = userSchema.parse(req.body);

      // Check for existing user
      const existingUser = await this.userRepository.findUserByEmail(validatedData.email);
      if (existingUser) {
        logger.warn(`User creation failed. Email ${validatedData.email} already exists`);
        return res.status(400).json({ message: "Email already exists" });
      }

      // Use the Firebase ID from the token as the userId
      const userId = (req as any).user?.uid;

      // Create the new user
      const user = await this.userRepository.createUser({
        ...validatedData,
        userId,
      });

      logger.info(`User created successfully with ID: ${userId}`);
      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof z.ZodError) {
        logger.error('Validation error during user creation', { errors: error.errors });
        return res.status(400).json({ message: "Validation Error", errors: error.errors });
      }
      logger.error('Error creating user', { error });
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await this.userRepository.getAllUsers();
      logger.info('Users fetched successfully');
      return res.json(users);
    } catch (error) {
      logger.error('Error fetching users', { error });
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await this.userRepository.findUserByUserId(req.params.id);
      if (!user) {
        logger.warn(`User with ID ${req.params.id} not found`);
        return res.status(404).json({ message: "User not found" });
      }
      logger.info(`User fetched successfully with ID: ${req.params.id}`);
      return res.json(user);
    } catch (error) {
      logger.error(`Error fetching user with ID ${req.params.id}`, { error });
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const validatedData = userSchema.partial().parse(req.body); // Use `.partial()` for optional fields in updates

      const user = await this.userRepository.findUserByUserId(req.params.id);
      if (!user) {
        logger.warn(`User update failed. User ID ${req.params.id} not found`);
        return res.status(404).json({ message: "User not found" });
      }

      const updatedUser = await this.userRepository.updateUser(user.userId, validatedData);

      logger.info(`User updated successfully with ID: ${user.userId}`);
      return res.json(updatedUser);
    } catch (error) {
      if (error instanceof z.ZodError) {
        logger.error('Validation error during user update', { errors: error.errors });
        return res.status(400).json({ message: "Validation Error", errors: error.errors });
      }
      logger.error('Error updating user', { error });
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await this.userRepository.findUserByUserId(req.params.id);
      if (!user) {
        logger.warn(`User deletion failed. User ID ${req.params.id} not found`);
        return res.status(404).json({ message: "User not found" });
      }

      await this.userRepository.deleteUser(user.userId);
      logger.info(`User deleted successfully with ID: ${user.userId}`);
      return res.status(204).send();
    } catch (error) {
      logger.error(`Error deleting user with ID ${req.params.id}`, { error });
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
