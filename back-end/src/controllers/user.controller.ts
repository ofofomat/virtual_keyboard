import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { UserService } from 'src/services';
import { CreateUserDto } from 'src/dtos';
import { User } from 'src/entities';
import { LoginUserDTO } from 'src/dtos/loginUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @Get(':username')
  async getUser(@Param('username') username: string): Promise<User | null> {
    return await this.userService.getUser(username);
  }

  @Post('login')
  async login(@Body() { sessionId, username, passwordTyped }: LoginUserDTO): Promise<User|undefined> {
    const response = await this.userService.login({ sessionId, username, passwordTyped });
    
    if (response === null) {
      throw new HttpException("Senhas não são iguais", HttpStatus.BAD_REQUEST);
    }
    
    return response; 
  }
}

