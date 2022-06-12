import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateOperationPrincipleDto {
  @ApiProperty({
    example: "Пьезорезистивный",
    description: "Принцип работы ",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;

  @ApiProperty({
    example:
      "В основе лежит прямой пьезоэлектрический эффект, при котором пьезоэлемент генерирует электрический сигнал, пропорциональный действующей на него силе или давлению.",
    description: "Принцип работы",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly description: string;
}
