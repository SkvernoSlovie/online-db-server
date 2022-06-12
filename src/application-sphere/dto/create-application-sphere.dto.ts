import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateApplicationSphereDto {
  @ApiProperty({
    example: "авиационная техника",
    description: "Сфера применения",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;
}
