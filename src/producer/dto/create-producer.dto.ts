import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateProducerDto {
  @ApiProperty({
    example: "BD Sensors RUS",
    description: "Название ",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;

  @ApiProperty({
    example: "Россия, Москва, Варшавское шоссе, д.37А",
    description: "Адрес",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly address: string;

  @ApiProperty({
    example: "(495) 380-1683",
    description: "Номер телефона",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly phone: string;

  @ApiProperty({
    example: "http://www.bdsensors.ru/",
    description: "Website",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly website: string;

  @ApiProperty({
    example: "onsemi@mtgroup.ru",
    description: "Email",
  })
  @IsString({ message: "Должно быть строкой" })
  @IsEmail({}, { message: "Некорректный email" })
  readonly email: string;
}
