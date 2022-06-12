import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class DeleteEnvironmentDto {
  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор",
  })
  @IsNumber({}, { message: "Должно быть строкой" })
  readonly id: number;
}
