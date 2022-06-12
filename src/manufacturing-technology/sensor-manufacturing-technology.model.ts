import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Sensor } from '../sensors/sensors.model';
import { ManufacturingTechnology } from './manufacturing-technology.model';

@Table({ tableName: 'sensor_manufacturing_technology' })
export class SensorManufacturingTechnology extends Model<SensorManufacturingTechnology> {
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

  @ForeignKey(() => ManufacturingTechnology)
  @Column({ type: DataType.INTEGER })
  manufacturing_technology_id: number;
}
