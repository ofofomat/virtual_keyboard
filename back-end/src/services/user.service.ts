import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities';
import { CreateUserDto } from 'src/dtos';
import { LoginUserDTO } from 'src/dtos/loginUser.dto';
import { SessionService } from './session.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly sessionService: SessionService,
  ) {}
  private readonly logger = new Logger(UserService.name);

  async onModuleInit() {
    const count = await this.userRepository.count();
    if (count === 0) {
      this.logger.log('Seeding mock user...');
      await this.createUser({
        username: 'mock_user',
        name: 'Mock User',
        password: [4,6,7,3,4,9],
      });
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, name, password } = createUserDto;

    const user = this.userRepository.create({ username, name, password });
    return await this.userRepository.save(user);
  }

  async getUser(username: string): Promise<User | null> {
    return await this.userRepository.findOneBy({username});
  }

  async login({sessionId, username, passwordTyped, hash}: LoginUserDTO){
    try {
      const isValid = await this.sessionService.validateLoginAttempt({ sessionId, hash });
      
      if (!isValid) return null;
      
      const user = await this.getUser(username); 

      if ( user === null ) return null;
      
      passwordTyped.forEach((val, i)=>{
        if (!val.some(v => v === user.password[i])) {
          throw new Error("Invalid password");
        }
      });

      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (e) {
      await this.sessionService.invalidateSession(sessionId);
      console.error(e);
    }
  }
}

