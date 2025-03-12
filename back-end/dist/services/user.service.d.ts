import { Repository } from 'typeorm';
import { User } from 'src/entities';
import { CreateUserDto } from 'src/dtos';
import { LoginUserDTO } from 'src/dtos/loginUser.dto';
import { SessionService } from './session.service';
export declare class UserService {
    private readonly userRepository;
    private readonly sessionService;
    constructor(userRepository: Repository<User>, sessionService: SessionService);
    private readonly logger;
    onModuleInit(): Promise<void>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUser(username: string): Promise<User | null>;
    login({ sessionId, username, passwordTyped, hash }: LoginUserDTO): Promise<User | null | undefined>;
}
