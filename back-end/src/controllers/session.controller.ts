import { Controller, Body, Post } from '@nestjs/common';
import { SessionService } from 'src/services';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('start')
  async startSession(@Body ('previousSessionId') previousSessionId: string) {
    return await this.sessionService.createSession(previousSessionId);
  }

  @Post('invalidate')
  async invalidateSession(@Body('sessionId') sessionId: string) {
    return await this.sessionService.invalidateSession(sessionId);
  }
}
