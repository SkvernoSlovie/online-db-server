import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Sensor } from 'src/sensors/sensors.model';
import { SensorOutputSignal } from './sensor-output-signal.model';

interface OutputSignalAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'output_signal' })
export class OutputSignal extends Model<OutputSignal, OutputSignalAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Дискретный',
    description: 'Выходной сигнал',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({
    example:
      'Дискретный сигнал - сигнал, имеющий конечное число значений. Обычно сигналы, передаваемые через дискретные каналы, имеют два или три значения. Использование сигналов с тремя значениями обеспечивает синхронизацию передачи.',
    description: 'Описание',
  })
  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @BelongsToMany(() => Sensor, () => SensorOutputSignal)
  sensors: Sensor[];
}
