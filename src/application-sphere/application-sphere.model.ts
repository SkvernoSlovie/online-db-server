import {
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Device } from "src/devices/device.model";
import { DeviceApplicationSphere } from "./devices-applecation-sphere.model";
import { Sensor } from "src/sensors/sensors.model";
import { SensorApplicationSphere } from "./sensors-application-sphere.model";

interface ApplicationSphereAttrs {
  name: string;
}

@Table({ tableName: "application_sphere" })
export class ApplicationSphere extends Model<
  ApplicationSphere,
  ApplicationSphereAttrs
> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "авиационная техника",
    description: "Сфера применения",
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @BelongsToMany(() => Device, () => DeviceApplicationSphere)
  devices: Device[];

  @BelongsToMany(() => Sensor, () => SensorApplicationSphere)
  sensors: Sensor[];
}
