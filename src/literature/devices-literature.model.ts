import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Device } from "../devices/device.model";
import { Literature } from "./literature.model";

@Table({ tableName: "device_literature" })
export class DeviceLiterature extends Model<DeviceLiterature> {
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

  @ForeignKey(() => Literature)
  @Column({ type: DataType.INTEGER })
  literature_id: number;
}
