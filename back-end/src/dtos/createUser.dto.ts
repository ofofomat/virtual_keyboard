import { IsString, IsNotEmpty, IsArray, ArrayMinSize, ArrayMaxSize, ValidateNested } from 'class-validator';

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
  password: number[];
}
