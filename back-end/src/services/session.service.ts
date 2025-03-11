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

  async createSession(): Promise<{ sessionId: string; keyboard: KeyboardDTO[] }> {
    const keyboardLayout = generateKeyboardLayout();
    const keyboardHash = generateKeyboardHash(keyboardLayout);
    const sessionId = uuidv4();
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

  async validateLoginAttempt({ sessionId, passwordTyped }: Partial<LoginUserDTO>): Promise<boolean | Error> {
    if (!passwordTyped) {
      throw new Error("Senha não providenciada!");
    }
  
    const session = await this.sessionRepository.findOne({ where: { id: sessionId, is_active: true } });
    if (session == null) {
      throw new Error("ID de sessão inválida!");
    }
    Logger.debug(`Password typed: ${passwordTyped}`);
    const receivedHash = generateKeyboardHash(passwordTyped);
    return receivedHash === session.keyboard_hash;
  }

  async invalidateSession(sessionId: string): Promise<void> {
    await this.sessionRepository.update(sessionId, { is_active: false });
  }

  /*
  TODO: Criar job para deletar sessões inativas de X em X tempo.
  */
}
