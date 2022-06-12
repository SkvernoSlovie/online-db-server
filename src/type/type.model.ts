import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Device } from 'src/devices/device.model';
import { DeviceType } from './device-type.model';

interface TypeAttrs {
  name: string;
}

@Table({ tableName: 'type' })
export class Type extends Model<Type, TypeAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Ускорение',
    description: 'Тип',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @BelongsToMany(() => Device, () => DeviceType)
  devices: Device[];
}
