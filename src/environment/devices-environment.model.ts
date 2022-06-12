import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Device } from "../devices/device.model";
import { Environment } from "./environment.model";

@Table({ tableName: "device_environment" })
export class DeviceEnvironment extends Model<DeviceEnvironment> {
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

  @ForeignKey(() => Environment)
  @Column({ type: DataType.INTEGER })
  environment_id: number;
}
