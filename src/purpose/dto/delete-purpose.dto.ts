import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeletePurposeDto {
  @ApiProperty({
    example: '1',
    description: 'Id назначения',
  })
  @IsString({ message: 'Должно быть числом' })
  readonly id: number;
}
