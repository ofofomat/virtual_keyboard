import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from 'src/services';
import { CreateUserDto } from 'src/dtos';
import { User } from 'src/entities';

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
}

