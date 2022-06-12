import { ApiProperty } from "@nestjs/swagger";

export class DeleteSensorDto {
  @ApiProperty({ example: "12", description: "Id" })
  readonly id: number;
}