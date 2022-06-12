import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Sensor } from 'src/sensors/sensors.model';
import { SensorSensorType } from './sensor-sensor-type.model';

interface SensorTypeAttrs {
  name: string;
}

@Table({ tableName: 'sensor_type' })
export class SensorType extends Model<SensorType, SensorTypeAttrs> {
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

  @BelongsToMany(() => Sensor, () => SensorSensorType)
  sensors: Sensor[];
}
