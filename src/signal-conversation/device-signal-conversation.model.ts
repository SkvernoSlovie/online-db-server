import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { SignalConversation } from './signal-conversation.model';
import { Device } from 'src/devices/device.model';

@Table({ tableName: 'device_signal_conversation' })
export class DeviceSignalConversation extends Model<DeviceSignalConversation> {
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

  @ForeignKey(() => SignalConversation)
  @Column({ type: DataType.INTEGER })
  signal_conversation_id: number;
}
