import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePurposeDto {
  @ApiProperty({
    example: 'Пилотажно-навигационные приборы',
    description: 'Назначение',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;
}
