import { IsDecimal, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductDto {



    @IsString()
    @MinLength(3)
    name: string;

    @IsOptional()
    @IsString()
    image: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsDecimal()
    @IsPositive()
    price: number;

}
