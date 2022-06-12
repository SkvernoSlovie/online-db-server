import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateLiteratureDto {
  @ApiProperty({
    example: "Пьезоэлектрические датчики",
    description: "Название литературы",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;

  @ApiProperty({
    example: "Шарапов В. М.",
    description: "Автор",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly author: string;

  @ApiProperty({
    example: "1996",
    description: "Год публикации",
  })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly year_of_publish: number;

  @ApiProperty({
    example: "Мир",
    description: "Издательство",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly literature_publisher: string;

  @ApiProperty({
    example: "www.ya.ru",
    description: "Интернет источник",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly literature_website: string;
}
