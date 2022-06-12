import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateControlTypeDto {
  @ApiProperty({ example: "Дистанционный", description: "Тип управления" })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;
}
