import { KeyboardDTO } from '@/types/keyboardDTO';
import { useEffect, useState } from 'react';

export function useSession() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [keyboard, setKeyboard] = useState<KeyboardDTO[] | null>(null);

  useEffect(() => {
    (async () => {
      await startSession();
    })();
  }, []);

  async function startSession() {
    try {
      const res = await fetch('https://localhost:9000/session/start');
      if (!res.ok) throw new Error('Failed to start session');

      const { sessionId, keyboard } = await res.json();
      setSessionId(sessionId);
      setKeyboard(keyboard);
    } catch (error) {
      console.error('Error starting session:', error);
    }
  }

  return { sessionId, keyboard };
}
