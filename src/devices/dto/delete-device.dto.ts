import { ApiProperty } from "@nestjs/swagger";

export class DeleteDeviceDto {
  @ApiProperty({ example: "12", description: "Id" })
  readonly id: number;
}