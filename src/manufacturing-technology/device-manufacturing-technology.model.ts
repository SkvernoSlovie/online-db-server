import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Device } from 'src/devices/device.model';
import { ManufacturingTechnology } from './manufacturing-technology.model';

@Table({ tableName: 'device_manufacturing_technology' })
export class DeviceManufacturingTechnology extends Model<DeviceManufacturingTechnology> {
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

  @ForeignKey(() => ManufacturingTechnology)
  @Column({ type: DataType.INTEGER })
  manufacturing_technology_id: number;
}
