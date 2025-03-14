import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from 'src/entities';
import { v4 as uuidv4 } from 'uuid';
import { generateKeyboardHash, generateKeyboardLayout } from 'src/utils/func';
import { KeyboardDTO } from 'src/dtos';
import { LoginUserDTO } from 'src/dtos/loginUser.dto';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
  ) {}

  async createSession(previousSessionId?: string): Promise<{ sessionId: string; keyboard: KeyboardDTO[] }> {
    const keyboardLayout = generateKeyboardLayout();
    const keyboardHash = generateKeyboardHash(keyboardLayout);
    const sessionId = uuidv4();
    if (previousSessionId) {
      await this.sessionRepository.update(
        { id: previousSessionId, is_active: true }, 
        { is_active: false }
      );
    }
    await this.sessionRepository.save({ 
      id: sessionId, 
      keyboard_hash: keyboardHash
    });

    const keyboard = keyboardLayout.map(pair => ({
      text: `${pair[0]} ou ${pair[1]}`,
      value: pair,
    }));

    return { sessionId, keyboard };
  }

  async validateLoginAttempt({ sessionId, hash }: Partial<LoginUserDTO>): Promise<boolean | Error> {
    const session = await this.sessionRepository.findOne({ where: { id: sessionId, is_active: true } });
    if (session == null) {
      throw new Error("ID de sessão inválida!");
    }
    return hash === session.keyboard_hash;
  }

  async invalidateSession(sessionId: string): Promise<void> {
    await this.sessionRepository.update(sessionId, { is_active: false });
  }

  /*
  TODO: Criar job para deletar sessões inativas de X em X tempo.
  */
}
