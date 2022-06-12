import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Device } from 'src/devices/device.model';
import { MeasurableShowType } from './measure-show-type.model';

@Table({ tableName: 'device_measurable_show_type' })
export class DeviceMeasurableShowType extends Model<DeviceMeasurableShowType> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => MeasurableShowType)
  @Column({ type: DataType.INTEGER })
  show_type_id: number;

  @ForeignKey(() => Device)
  @Column({ type: DataType.INTEGER })
  device_id: number;
}
