import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Sensor } from '../sensors/sensors.model';
import { Producer } from './producer.model';

@Table({ tableName: 'sensor_producer' })
export class SensorProducer extends Model<SensorProducer> {
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

  @ForeignKey(() => Producer)
  @Column({ type: DataType.INTEGER })
  producer_id: number;
}
