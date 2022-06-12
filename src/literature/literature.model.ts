import {
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Device } from "src/devices/device.model";
import { DeviceLiterature } from "./devices-literature.model";
import { Sensor } from "src/sensors/sensors.model";
import { SensorLiterature } from "./sensors-literature.model";

interface LiteratureAttrs {
  name: string;
}

@Table({ tableName: "literature" })
export class Literature extends Model<Literature, LiteratureAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Пьезоэлектрические датчики",
    description: "Название литературы",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({
    example: "Шарапов В. М.",
    description: "Автор",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  author: string;

  @ApiProperty({
    example: "1996",
    description: "Год публикации",
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  year_of_publish: number;

  @ApiProperty({
    example: "Мир",
    description: "Издательство",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  literature_publisher: string;

  @ApiProperty({
    example: "www.ya.ru",
    description: "Интернет источник",
  })
  @Column({ type: DataType.STRING, allowNull: true })
  readonly literature_website: string;

  @BelongsToMany(() => Device, () => DeviceLiterature)
  devices: Device[];

  @BelongsToMany(() => Sensor, () => SensorLiterature)
  sensors: Sensor[];
}
