import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { MeasurableValue } from "./measurable-value.model";
import { Sensor } from "src/sensors/sensors.model";

@Table({ tableName: "sensor_measurable_value" })
export class SensorMeasurableValue extends Model<SensorMeasurableValue> {
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

  @ForeignKey(() => Sensor)
  @Column({ type: DataType.INTEGER })
  sensor_id: number;
}
