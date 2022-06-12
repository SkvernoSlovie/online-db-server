import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Device } from "src/devices/device.model";
import { DeviceControlType } from "./device-control-type.model";

interface ControlTypeAttrs {
  name: string;
}

@Table({ tableName: "control_type" })
export class ControlType extends Model<ControlType, ControlTypeAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Дистанционный", description: "Тип управления" })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @BelongsToMany(() => Device, () => DeviceControlType)
  devices: Device[];
}
