import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Device } from 'src/devices/device.model';
import { DeviceMeasurableValue } from './devices-measurable-value.model';
import { Sensor } from 'src/sensors/sensors.model';
import { SensorMeasurableValue } from './sensor-measurable-value.model';

interface MeasurableValueAttrs {
  name: string;
}

@Table({ tableName: 'measurable_value' })
export class MeasurableValue extends Model<MeasurableValue, MeasurableValueAttrs> {
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
    description: 'Измеряемое значение',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({
    example: 'Ускорение - производная от скорости по времени...',
    description: 'Описание',
  })
  @Column({ type: DataType.TEXT, allowNull: true })
  description: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  measurerange_min: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  measurerange_max: number;

  @BelongsToMany(() => Device, () => DeviceMeasurableValue)
  device: Device[];

  @BelongsToMany(() => Sensor, () => SensorMeasurableValue)
  sensors: Sensor[];
}
