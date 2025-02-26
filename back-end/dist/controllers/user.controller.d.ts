import { UserService } from '../services/index';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { User } from 'src/entities';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUser(username: string): Promise<User | null>;
}
