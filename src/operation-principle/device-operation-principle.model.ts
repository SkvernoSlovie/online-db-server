import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { OperationPrinciple } from './operation-principle.model';
import { Device } from '../devices/device.model';

@Table({ tableName: 'device_operation_principle' })
export class DeviceOperationPrinciple extends Model<DeviceOperationPrinciple> {
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

  @ForeignKey(() => OperationPrinciple)
  @Column({ type: DataType.INTEGER })
  operation_principle_id: number;
}
