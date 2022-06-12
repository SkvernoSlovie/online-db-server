import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Sensor } from 'src/sensors/sensors.model';
import { SensorProducer } from './sensor-producer.model';

interface ProducerAttrs {
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Table({ tableName: 'producer' })
export class Producer extends Model<Producer, ProducerAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'BD Sensors RUS',
    description: 'Производитель',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({
    example: 'sales.addresses@www.semiconductors.philips.com',
    description: 'Email',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({
    example: '891202020',
    description: 'Номер телефона производителя',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;

  @ApiProperty({
    example: 'г. Москва',
    description: 'Адрес производителя',
  })
  @Column({ type: DataType.TEXT, allowNull: false })
  address: string;

  @ApiProperty({
    example: 'producer.com',
    description: 'Сайт производителя',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  website: string;

  @BelongsToMany(() => Sensor, () => SensorProducer)
  sensors: Sensor[];
}
