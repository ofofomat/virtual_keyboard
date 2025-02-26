import { IsString, IsNotEmpty, IsArray, ArrayMinSize, ArrayMaxSize, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class PasswordPairDto {
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  numbers: number[];
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @ArrayMinSize(6)
  @ArrayMaxSize(6)
  @ValidateNested({ each: true })
  @Type(() => PasswordPairDto)
  password: PasswordPairDto[];
}
