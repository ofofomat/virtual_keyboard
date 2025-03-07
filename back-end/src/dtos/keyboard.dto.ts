import { ArrayMaxSize, ArrayMinSize, IsArray, IsNotEmpty, IsString } from "class-validator";

export class KeyboardDTO {
    @IsString()
    @IsNotEmpty()
    text: string; 
    @IsArray()
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    value: number[];
};