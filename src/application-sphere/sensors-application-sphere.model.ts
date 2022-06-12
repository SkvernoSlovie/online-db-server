import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
  } from "sequelize-typescript";
  import { ApplicationSphere } from "./application-sphere.model";
  import { Sensor } from "../sensors/sensors.model";
  
  @Table({ tableName: "sensor_application_sphere" })
  export class SensorApplicationSphere extends Model<SensorApplicationSphere> {
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
  
    @ForeignKey(() => ApplicationSphere)
    @Column({ type: DataType.INTEGER })
    application_sphere_id: number;
  }