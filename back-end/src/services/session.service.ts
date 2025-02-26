import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from '../entities/session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
  ) {}

  async createSession(id: string, keyboardLayout: string) {
    const session = this.sessionRepository.create({ id, keyboard_layout: keyboardLayout });
    return this.sessionRepository.save(session);
  }

  async getSession(id: string) {
    return this.sessionRepository.findOne({ where: { id, is_active: true } });
  }

  async invalidateSession(id: string) {
    return this.sessionRepository.update(id, { is_active: false });
  }
}
