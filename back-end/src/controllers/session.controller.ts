import { Controller, Get } from '@nestjs/common';
import { SessionService } from 'src/services';

@Controller()
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

}
