import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { OutputSignal } from './output-signal.model';
import { Device } from 'src/devices/device.model';

@Table({ tableName: 'device_output_signal' })
export class DeviceOutputSignal extends Model<DeviceOutputSignal> {
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

  @ForeignKey(() => OutputSignal)
  @Column({ type: DataType.INTEGER })
  output_signal_id: number;
}
