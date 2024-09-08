import { Request, Response } from "express";
import { TaskRepository } from "../repository/task.repository";

export class TaskController {
  constructor(private taskRepository = new TaskRepository()) {}

  async createTask(req: Request, res: Response) {
    try {
      const { title, description, dueDate, type, property } = req.body;

      const task = await this.taskRepository.createTask({
        title,
        description,
        dueDate,
        type,
        property,
      });

      return res.status(201).json(task);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async getTasksByProperty(req: Request, res: Response) {
    try {
      const tasks = await this.taskRepository.getTasksByProperty(req.params.propertyId);
      return res.json(tasks);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async getTaskById(req: Request, res: Response) {
    try {
      const task = await this.taskRepository.findTaskById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.json(task);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const { title, description, dueDate, type } = req.body;
      const task = await this.taskRepository.updateTask(req.params.id, {
        title,
        description,
        dueDate,
        type,
      });
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.json(task);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const task = await this.taskRepository.deleteTask(req.params.id);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
