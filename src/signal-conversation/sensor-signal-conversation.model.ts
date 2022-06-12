import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { SignalConversation } from './signal-conversation.model';
import { Sensor } from '../sensors/sensors.model';

@Table({ tableName: 'sensor_signal_conversation' })
export class SensorSignalConversation extends Model<SensorSignalConversation> {
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

  @ForeignKey(() => SignalConversation)
  @Column({ type: DataType.INTEGER })
  signal_conversation_id: number;
}
