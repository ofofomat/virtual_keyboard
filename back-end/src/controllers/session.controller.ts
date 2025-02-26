import { Controller, Get } from '@nestjs/common';
import { SessionService } from '../services/index';

@Controller()
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

}
