import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
  } from "sequelize-typescript";
  import { ApplicationSphere } from "./application-sphere.model";
  import { Device } from "../devices/device.model";
  
  @Table({ tableName: "device_application_sphere" })
  export class DeviceApplicationSphere extends Model<DeviceApplicationSphere> {
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
  
    @ForeignKey(() => ApplicationSphere)
    @Column({ type: DataType.INTEGER })
    application_sphere_id: number;
  }