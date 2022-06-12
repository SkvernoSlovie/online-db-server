import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateManufacturingTechnology {
  @ApiProperty({
    example: "Элементная",
    description: "Технология изготовления",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;

  @ApiProperty({
    example: "",
    description: "Описание",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly description: string;
}
