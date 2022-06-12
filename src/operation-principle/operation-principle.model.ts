import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Device } from 'src/devices/device.model';
import { DeviceOperationPrinciple } from './device-operation-principle.model';
import { Sensor } from 'src/sensors/sensors.model';
import { SensorOperationPrinciple } from './sensor-operation-principle.model';

interface OperationPrincipleAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'operation_principle' })
export class OperationPrinciple extends Model<OperationPrinciple, OperationPrincipleAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Пьезорезистивный',
    description: 'Принцип работы ',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({
    example:
      'В основе лежит прямой пьезоэлектрический эффект, при котором пьезоэлемент генерирует электрический сигнал, пропорциональный действующей на него силе или давлению.',
    description: 'Описание',
  })
  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @BelongsToMany(() => Device, () => DeviceOperationPrinciple)
  devices: Device[];

  @BelongsToMany(() => Sensor, () => SensorOperationPrinciple)
  sensors: Sensor[];
}
