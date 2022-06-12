import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Sensor } from "../sensors/sensors.model";
import { Environment } from "./environment.model";

@Table({ tableName: "sensor_environment" })
export class SensorEnvironment extends Model<SensorEnvironment> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Sensor)
  @Column({ type: DataType.INTEGER })
  sensor_id: number;

  @ForeignKey(() => Environment)
  @Column({ type: DataType.INTEGER })
  environment_id: number;
}
