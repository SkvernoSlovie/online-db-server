import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateOutputSignalDto {
  @ApiProperty({
    example: "Дискретный",
    description: "Выходной сигнал",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;

  @ApiProperty({
    example:
      "Дискретный сигнал - сигнал, имеющий конечное число значений. Обычно сигналы, передаваемые через дискретные каналы, имеют два или три значения. Использование сигналов с тремя значениями обеспечивает синхронизацию передачи.",
    description: "Описание",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly description: string;
}
