import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { MeasurableValue } from "./measurable-value.model";
import { Device } from "src/devices/device.model";

@Table({ tableName: "device_measurable_value" })
export class DeviceMeasurableValue extends Model<DeviceMeasurableValue> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => MeasurableValue)
  @Column({ type: DataType.INTEGER })
  measurable_id: number;

  @ForeignKey(() => Device)
  @Column({ type: DataType.INTEGER })
  device_id: number;
}
