import { SessionService } from 'src/services';
export declare class SessionController {
    private readonly sessionService;
    constructor(sessionService: SessionService);
    startSession(username: string): Promise<{
        sessionId: string;
        keyboard: import("../dtos").KeyboardDTO[];
    }>;
    invalidateSession(sessionId: string): Promise<{
        message: string;
    }>;
}
