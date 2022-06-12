import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Device } from 'src/devices/device.model';
import { DevicePurpose } from './device-purpose.model';

interface PurposelAttrs {
  name: string;
}

@Table({ tableName: 'purpose' })
export class Purpose extends Model<Purpose, PurposelAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Пилотажно-навигационные приборы',
    description: 'Назначение',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @BelongsToMany(() => Device, () => DevicePurpose)
  devices: Device[];
}
