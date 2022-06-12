import {
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Device } from "src/devices/device.model";

import { DeviceEnvironment } from "./devices-environment.model";
import { Sensor } from "src/sensors/sensors.model";
import { SensorEnvironment } from "./sensors-environment.model";

interface EnvironmentAttrs {
  name: string;
  description: string;
}

@Table({ tableName: "environment" })
export class Environment extends Model<Environment, EnvironmentAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Газ",
    description: "Агрегатное состояние",
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({
    example:
      "Агрегатное состояние вещества, характеризующееся очень слабыми связями между составляющими его частицами (молекулами, атомами или ионами), а также их большой подвижностью.",
    description: "Краткое описание",
  })
  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @BelongsToMany(() => Device, () => DeviceEnvironment)
  devices: Device[];

  @BelongsToMany(() => Sensor, () => SensorEnvironment)
  sensors: Sensor[];
}
