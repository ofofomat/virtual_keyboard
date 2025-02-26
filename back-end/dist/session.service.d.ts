import { Repository } from 'typeorm';
import { Session } from './session.entity';
export declare class SessionService {
    private readonly sessionRepository;
    constructor(sessionRepository: Repository<Session>);
    createSession(id: string, keyboardLayout: string): Promise<Session>;
    getSession(id: string): Promise<Session | null>;
    invalidateSession(id: string): Promise<import("typeorm").UpdateResult>;
}
