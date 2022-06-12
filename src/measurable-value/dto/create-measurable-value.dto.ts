import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateMeasurableValueDto {
  @ApiProperty({
    example: "Давление",
    description: "Измеряемая величина",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;

  @ApiProperty({
    example: "Ускорение - производная от скорости по времени...",
    description: "Описание",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly description: string;

  @IsNumber({}, { message: "Должно быть строкой" })
  readonly measurerange_min: number;

  @IsNumber({}, { message: "Должно быть строкой" })
  readonly ad_measurerange_max: number;
}
