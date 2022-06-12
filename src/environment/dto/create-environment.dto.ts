import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEnvironmentDto {
  @ApiProperty({
    example: "Газ",
    description: "Агрегатное состояние",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;

  @ApiProperty({
    example:
      "Агрегатное состояние вещества, характеризующееся очень слабыми связями между составляющими его частицами (молекулами, атомами или ионами), а также их большой подвижностью.",
    description: "Краткое описание",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly description: string;
}
