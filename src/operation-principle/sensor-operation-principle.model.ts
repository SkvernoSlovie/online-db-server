import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Sensor } from '../sensors/sensors.model';
import { OperationPrinciple } from './operation-principle.model';

@Table({ tableName: 'sensor_operation_principle' })
export class SensorOperationPrinciple extends Model<SensorOperationPrinciple> {
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

  @ForeignKey(() => OperationPrinciple)
  @Column({ type: DataType.INTEGER })
  operation_principle_id: number;
}
