import { Request, Response } from "express";
import { userRepository } from "../repository/user.repository";

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, password } = req.body;

      // Check for existing user
      const existingUser = await userRepository.findOneBy({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const user = userRepository.create({ firstName, lastName, email, password });
      await userRepository.save(user);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await userRepository.find();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
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
      const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      userRepository.merge(user, { firstName, lastName, email, password });
      const result = await userRepository.save(user);

      return res.json(result);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      await userRepository.remove(user);

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
