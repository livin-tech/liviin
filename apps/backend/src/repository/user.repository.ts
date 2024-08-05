import { Repository } from "typeorm";
import { User } from "../models/user.model";
import { AppDataSource } from "../database/data-source";

export class UserRepository extends Repository<User> {
  // Additional custom queries can be implemented here
}

export const userRepository = AppDataSource.getRepository(User).extend(UserRepository);
