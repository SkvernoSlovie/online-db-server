import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSensetiveElementDto {
  @ApiProperty({
    example: "Поплавковый элемент",
    description: "Чувствительный элемент",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;

  @ApiProperty({
    example:
      "Кремниевый полупроводник, изменяющий электрическое сопротивление в зависимости от деформации.",
    description: "Описание",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly description: string;
}
