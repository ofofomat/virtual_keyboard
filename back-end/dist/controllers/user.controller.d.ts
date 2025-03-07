import { UserService } from 'src/services';
import { CreateUserDto } from 'src/dtos';
import { User } from 'src/entities';
import { LoginUserDTO } from 'src/dtos/loginUser.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUser(username: string): Promise<User | null>;
    login({ sessionId, username, passwordTyped }: LoginUserDTO): Promise<User | undefined>;
}
