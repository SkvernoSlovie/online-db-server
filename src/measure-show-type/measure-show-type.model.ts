import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { DeviceMeasurableShowType } from './device-measurable-show-type.model';
import { Device } from 'src/devices/device.model';

interface MeasurableShowTypeAttrs {
  name: string;
}

@Table({ tableName: 'measure_show_type' })
export class MeasurableShowType extends Model<MeasurableShowType, MeasurableShowTypeAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Регистрирующий',
    description: 'Воспроизведение измеряемой величины',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @BelongsToMany(() => Device, () => DeviceMeasurableShowType)
  device: Device[];
}
