import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Sensor } from 'src/sensors/sensors.model';
import { SensorSignalConversation } from './sensor-signal-conversation.model';

interface SignalConversationAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'signal_conversation' })
export class SignalConversation extends Model<SignalConversation, SignalConversationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'ЦАП',
    description: 'Преобразование сигнала',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({
    example: 'Преобразует цифровой код в аналоговую величину.',
    description: 'Краткое описание',
  })
  @Column({ type: DataType.TEXT, allowNull: true })
  description: string;

  @BelongsToMany(() => Sensor, () => SensorSignalConversation)
  sensors: Sensor[];
}
