import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class DeleteSignalConversationDto {
  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор",
  })
  @IsNumber({}, { message: "Должно быть строкой" })
  readonly id: number;
}
