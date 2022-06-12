import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Device } from "src/devices/device.model";
import { ControlType } from "./control-type.model";

@Table({ tableName: "device_control_type" })
export class DeviceControlType extends Model<DeviceControlType> {
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

  @ForeignKey(() => ControlType)
  @Column({ type: DataType.INTEGER })
  control_type_id: number;
}
