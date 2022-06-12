import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class DeleteApplicationSphereDto {
  @ApiProperty({
    example: "1",
    description: "Id сферы применения",
  })
  @IsString({ message: "Должно быть числом" })
  readonly id: number;
}
