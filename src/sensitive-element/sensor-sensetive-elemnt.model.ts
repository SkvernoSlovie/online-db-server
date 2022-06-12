import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Sensor } from '../sensors/sensors.model';
import { SensetiveElement } from './sensetive-element.model';

@Table({ tableName: 'sensor_sensetive_element' })
export class SensorSensetiveElement extends Model<SensorSensetiveElement> {
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

  @ForeignKey(() => SensetiveElement)
  @Column({ type: DataType.INTEGER })
  sensetive_element_id: number;
}
