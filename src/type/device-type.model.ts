import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Device } from "../devices/device.model";
import { Type } from "./type.model";

@Table({ tableName: "device_type" })
export class DeviceType extends Model<DeviceType> {
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

  @ForeignKey(() => Type)
  @Column({ type: DataType.INTEGER })
  type_id: number;
}
