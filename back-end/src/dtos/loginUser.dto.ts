export class LoginUserDTO {
    sessionId: string;
    username: string;
    hash: string;
    passwordTyped: number[][];
}