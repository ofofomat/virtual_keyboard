import { Controller, Get, Body } from '@nestjs/common';
import { SessionService } from 'src/services';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get('start')
  async startSession(@Body() username:string) {
    return await this.sessionService.createSession(username);
  }
}
