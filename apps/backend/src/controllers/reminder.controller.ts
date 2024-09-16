import { Request, Response } from 'express';

import { ReminderRepository } from '../repository/reminder.repository';

export class ReminderController {
  constructor(private reminderRepository = new ReminderRepository()) {}

  // Create a new reminder
  async createReminder(req: Request, res: Response) {
    try {
      const { category, selectedMaterial, selectedFrequency, lastMaintenance, date } = req.body;

      const reminder = await this.reminderRepository.createReminder({
        category,
        selectedMaterial,
        selectedFrequency,
        lastMaintenance,
        date,
      });

      return res.status(201).json(reminder);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error });
    }
  }

  // Get all reminders
  async getReminders(req: Request, res: Response) {
    try {
      const reminders = await this.reminderRepository.getAllReminders();
      return res.json(reminders);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error });
    }
  }

  // Get reminder by ID
  async getReminderById(req: Request, res: Response) {
    try {
      const reminder = await this.reminderRepository.findReminderById(req.params.id);
      if (!reminder) {
        return res.status(404).json({ message: 'Reminder not found' });
      }
      return res.json(reminder);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error });
    }
  }

  // Update a reminder
  async updateReminder(req: Request, res: Response) {
    try {
      const { category, selectedMaterial, selectedFrequency, lastMaintenance, date } = req.body;

      const reminder = await this.reminderRepository.updateReminder(req.params.id, {
        category,
        selectedMaterial,
        selectedFrequency,
        lastMaintenance,
        date,
      });

      if (!reminder) {
        return res.status(404).json({ message: 'Reminder not found' });
      }

      return res.json(reminder);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error });
    }
  }

  // Delete a reminder
  async deleteReminder(req: Request, res: Response) {
    try {
      const reminder = await this.reminderRepository.deleteReminder(req.params.id);
      if (!reminder) {
        return res.status(404).json({ message: 'Reminder not found' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error });
    }
  }
}
