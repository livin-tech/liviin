import { UserModel, IUser } from '../models/user.model';

// Define a custom User repository
export class UserRepository {
  // Create a new user
  async createUser(userData: Partial<IUser>): Promise<IUser> {
    const user = new UserModel(userData);
    return await user.save();
  }

  // Find a user by userId
  async findUserByUserId(userId: string): Promise<IUser | null> {
    return UserModel.findOne({ userId });
  }

  // Find a user by email
  async findUserByEmail(email: string): Promise<IUser | null> {
    return UserModel.findOne({ email });
  }

  // Get all users
  async getAllUsers(): Promise<IUser[]> {
    return UserModel.find();
  }

  // Update a user
  async updateUser(userId: string, updateData: Partial<IUser>): Promise<IUser | null> {
    return UserModel.findOneAndUpdate({ userId }, updateData, { new: true });
  }

  // Delete a user
  async deleteUser(userId: string): Promise<IUser | null> {
    return UserModel.findOneAndDelete({ userId });
  }
}
