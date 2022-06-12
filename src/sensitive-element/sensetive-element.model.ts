import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Sensor } from 'src/sensors/sensors.model';
import { SensorSensetiveElement } from './sensor-sensetive-elemnt.model';

interface SensetiveElementAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'sensetive_element' })
export class SensetiveElement extends Model<SensetiveElement, SensetiveElementAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Поплавковый элемент',
    description: 'Чувствительный элемент ',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({
    example:
      'Кремниевый полупроводник, изменяющий электрическое сопротивление в зависимости от деформации.',
    description: 'Описание',
  })
  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @BelongsToMany(() => Sensor, () => SensorSensetiveElement)
  sensors: Sensor[];
}
