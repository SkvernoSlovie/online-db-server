import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class DeleteControlType {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly id: number;
}
