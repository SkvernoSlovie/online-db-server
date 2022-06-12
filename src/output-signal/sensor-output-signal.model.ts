import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { OutputSignal } from './output-signal.model';
import { Sensor } from '../sensors/sensors.model';

@Table({ tableName: 'sensor_output_signal' })
export class SensorOutputSignal extends Model<SensorOutputSignal> {
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

  @ForeignKey(() => OutputSignal)
  @Column({ type: DataType.INTEGER })
  output_signal_id: number;
}
