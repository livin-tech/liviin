import { Request, Response } from "express";
import { UserRepository } from "../repository/user.repository";

export class UserController {
  constructor(private userRepository = new UserRepository()) {}

  async createUser(req: Request, res: Response) {
    try {
      const {
        firstName,
        lastName,
        email,
        phoneNumber = '',
        address = '',
        subscriptionStatus = 'essential',
        role = 'user',
      } = req.body;

      // Validate required fields
      if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Check for existing user
      const existingUser = await this.userRepository.findUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      // Use the Firebase ID from the token as the userId
      const userId = (req as any).user?.uid;

      // Create the new user
      const user = await this.userRepository.createUser({
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        subscriptionStatus,
        role,
        userId,
      });

      return res.status(201).json(user);
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
  async getUsers(req: Request, res: Response) {
    try {
      const users = await this.userRepository.getAllUsers();
      return res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await this.userRepository.findUserByUserId(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        subscriptionStatus,
        role,
      } = req.body;

      const user = await this.userRepository.findUserByUserId(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const updatedUser = await this.userRepository.updateUser(user.userId, {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        subscriptionStatus,
        role,
      });

      return res.json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await this.userRepository.findUserByUserId(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      await this.userRepository.deleteUser(user.userId);

      return res.status(204).send();
    } catch (error) {
      console.error('Error deleting user:', error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
