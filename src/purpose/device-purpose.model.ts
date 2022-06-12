import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Purpose } from './purpose.model';
import { Device } from '../devices/device.model';

@Table({ tableName: 'device_purpose' })
export class DevicePurpose extends Model<DevicePurpose> {
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

  @ForeignKey(() => Purpose)
  @Column({ type: DataType.INTEGER })
  purpose_id: number;
}
