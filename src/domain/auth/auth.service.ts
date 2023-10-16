import { UserRepository } from "../../data/repository/user.repository";
import { LoginDTO } from "./dtos";

export class AuthService {
  private userRepository: UserRepository = new UserRepository();
  login = async (dto: LoginDTO) => {
    const user = await this.userRepository.getUserByEmail(dto.email);
    if(!user){
      
    }

  };

  register = () => {};
}
