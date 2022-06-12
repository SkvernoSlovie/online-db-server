import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class DeleteManufacturingTechnology {
  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор",
  })
  @IsString({ message: "Должно быть числом" })
  readonly id: number;
}
