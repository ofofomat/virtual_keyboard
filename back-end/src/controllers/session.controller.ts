import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { SessionService } from 'src/services';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get('start')
  async startSession(@Body() username:string) {
    return await this.sessionService.createSession(username);
  }

  @Post('invalidate/:sessionId')
  async invalidateSession(@Param('sessionId') sessionId: string) {
    await this.sessionService.invalidateSession(sessionId);
    return { message: 'Session invalidated' };
  }
}
