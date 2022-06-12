import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Sensor } from "../sensors/sensors.model";
import { Literature } from "./literature.model";

@Table({ tableName: "sensor_literature" })
export class SensorLiterature extends Model<SensorLiterature> {
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

  @ForeignKey(() => Literature)
  @Column({ type: DataType.INTEGER })
  literature_id: number;
}
