import { Request, Response } from "express";
import { UserRepository } from "../repository/user.repository";

export class UserController {
  constructor(private userRepository = new UserRepository()) {
  }
  async createUser(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, password } = req.body;

      // Check for existing user
      const existingUser = await this.userRepository.findUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const user = await this.userRepository.createUser({ firstName, lastName, email, password });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await this.userRepository.getAllUsers();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await this.userRepository.findUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = await this.userRepository.findUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const result = await this.userRepository.updateUser(user.id, { firstName, lastName, email, password });

      return res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await this.userRepository.findUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      await this.userRepository.deleteUser(user.id);

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
