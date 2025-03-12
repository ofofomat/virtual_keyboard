import { Repository } from 'typeorm';
import { Session } from 'src/entities';
import { KeyboardDTO } from 'src/dtos';
import { LoginUserDTO } from 'src/dtos/loginUser.dto';
export declare class SessionService {
    private readonly sessionRepository;
    constructor(sessionRepository: Repository<Session>);
    createSession(previousSessionId?: string): Promise<{
        sessionId: string;
        keyboard: KeyboardDTO[];
    }>;
    validateLoginAttempt({ sessionId, hash }: Partial<LoginUserDTO>): Promise<boolean | Error>;
    invalidateSession(sessionId: string): Promise<void>;
}
