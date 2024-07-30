import { IsString } from "class-validator";

export class CreateTaskDto {
    
    @IsString({message: `The brand most be a cool string` })
    readonly nombre:string;
    
    @IsString()
    readonly estado: string;

}