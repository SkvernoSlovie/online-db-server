import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateShowTypeDto {
  @ApiProperty({
    example: 'Регистрирующий',
    description: 'Воспроизведение измеряемой величины',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;
}
