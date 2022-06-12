import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSignalConversationDto {
  @ApiProperty({
    example: "ЦАП",
    description: "Преобразование сигнала",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;

  @ApiProperty({
    example: "Преобразует цифровой код в аналоговую величину.",
    description: "Краткое описание",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly description: string;
}
