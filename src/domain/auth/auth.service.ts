import { UserRepository } from "../../data/repository/user.repository";
import { LoginDTO } from "./dtos";
import bcrypt from "bcrypt";

export class AuthService {
  private userRepository: UserRepository = new UserRepository();
  login = async (dto: LoginDTO) => {
    const user = await this.userRepository.getUserByEmail(dto.email);
    if (!user) {
      //* return error
      throw new Error(`No user with email ${dto.email} found`);
    }
    const isMatch = bcrypt.compare(dto.password, user!.password);
    if (!isMatch) {
      throw new Error(`Password mismatch`);
    }

    //return user info with token
  };

  register = async (dto: any) => {
    const data = await this.userRepository.getUserByEmail(dto.email);
    if (data) {
      throw new Error(`User with this email already exists`);
    }
    try {
      const { password, ...user } = await this.userRepository.createUser(dto);
      return user;
    } catch (error) {
      throw new Error(`Error creating user ${error}`);
    }
  };
}
