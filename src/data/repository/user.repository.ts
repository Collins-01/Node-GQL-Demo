import { getRepository } from "typeorm";
import { User } from "../models";

export class UserRepository {
  repository = getRepository(User);

  /*
  Get by id
  get by email
  create a new user
  update user info [names]
  */
  getUserByEmail = async (email: string): Promise<User | null> => {
    return null;
  };

  createUser = async (dto: any): Promise<User> => {
    const data = this.repository.create(dto);
    const user = await this.repository.save(data);
    return user[0];
  };
}
