import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTypeDto {
  @ApiProperty({
    example: "ЦАП",
    description: "Преобразование сигнала",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;
}
