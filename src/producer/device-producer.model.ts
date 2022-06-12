import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Device } from 'src/devices/device.model';
import { Producer } from './producer.model';

@Table({ tableName: 'device_producer' })
export class DeviceProducer extends Model<DeviceProducer> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Device)
  @Column({ type: DataType.INTEGER })
  device_id: number;

  @ForeignKey(() => Producer)
  @Column({ type: DataType.INTEGER })
  producer_id: number;
}
