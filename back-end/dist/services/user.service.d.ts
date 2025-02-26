import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from 'src/dtos/createUser.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    private readonly logger;
    onModuleInit(): Promise<void>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUser(username: string): Promise<User | null>;
}
