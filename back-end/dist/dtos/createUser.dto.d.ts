declare class PasswordPairDto {
    numbers: number[];
}
export declare class CreateUserDto {
    username: string;
    name: string;
    password: PasswordPairDto[];
}
export {};
