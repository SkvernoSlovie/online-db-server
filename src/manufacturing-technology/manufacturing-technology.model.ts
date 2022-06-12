import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Sensor } from 'src/sensors/sensors.model';
import { SensorManufacturingTechnology } from './sensor-manufacturing-technology.model';

interface ManufacturingTechnologyAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'manufacturing_technology' })
export class ManufacturingTechnology extends Model<
  ManufacturingTechnology,
  ManufacturingTechnologyAttrs
> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Элементная',
    description: 'Технология изготовления',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({
    example: '',
    description: 'Описание',
  })
  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @BelongsToMany(() => Sensor, () => SensorManufacturingTechnology)
  sensors: Sensor[];
}
