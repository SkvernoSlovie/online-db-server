import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Sensor } from 'src/sensors/sensors.model';
import { SensorType } from './sensor-type.model';

@Table({ tableName: 'sensor_sensor_type' })
export class SensorSensorType extends Model<SensorType> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Sensor)
  @Column({ type: DataType.INTEGER })
  sensor_id: number;

  @ForeignKey(() => SensorType)
  @Column({ type: DataType.INTEGER })
  type_id: number;
}
