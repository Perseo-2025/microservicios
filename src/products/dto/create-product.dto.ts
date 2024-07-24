import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    //antes instalar las sgt dependencias class-validator class-transformer
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsNumber()
    @Type(() => Number)
    price: number;

}
