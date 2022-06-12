import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Device } from '../devices/device.model';
import { SenosrsInDevice } from '../devices/sensors-in-device.model';
import { ApplicationSphere } from '../application-sphere/application-sphere.model';
import { SensorApplicationSphere } from '../application-sphere/sensors-application-sphere.model';
import { Environment } from 'src/environment/environment.model';
import { SensorEnvironment } from 'src/environment/sensors-environment.model';
import { Literature } from 'src/literature/literature.model';
import { SensorLiterature } from 'src/literature/sensors-literature.model';
import { MeasurableValue } from 'src/measurable-value/measurable-value.model';
import { SensorMeasurableValue } from 'src/measurable-value/sensor-measurable-value.model';
import { SensorType } from 'src/sensor-type/sensor-type.model';
import { SensorSensorType } from 'src/sensor-type/sensor-sensor-type.model';
import { SignalConversation } from 'src/signal-conversation/signal-conversation.model';
import { SensorSignalConversation } from 'src/signal-conversation/sensor-signal-conversation.model';
import { OutputSignal } from 'src/output-signal/output-signal.model';
import { SensorOutputSignal } from 'src/output-signal/sensor-output-signal.model';
import { ManufacturingTechnology } from 'src/manufacturing-technology/manufacturing-technology.model';
import { SensorManufacturingTechnology } from 'src/manufacturing-technology/sensor-manufacturing-technology.model';
import { Producer } from 'src/producer/producer.model';
import { SensorProducer } from 'src/producer/sensor-producer.model';
import { OperationPrinciple } from 'src/operation-principle/operation-principle.model';
import { SensorOperationPrinciple } from 'src/operation-principle/sensor-operation-principle.model';
import { SensetiveElement } from 'src/sensitive-element/sensetive-element.model';
import { SensorSensetiveElement } from 'src/sensitive-element/sensor-sensetive-elemnt.model';

interface SensorCreationAttrs {
  name: string;
  height: number;
  width: number;
  length: number;
  diameter: number;
  unit_of_length: string;
  weight: number;
  unit_of_weight: string;
}

@Table({ tableName: 'sensors' })
export class Sensor extends Model<Sensor, SensorCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'AD-12', description: 'Название' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: '100', description: 'Высота' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  height: number;

  @ApiProperty({ example: '100', description: 'Ширина' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  width: number;

  @ApiProperty({ example: '100', description: 'Длина' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  length: number;

  @ApiProperty({ example: '100', description: 'Диаметр' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  diameter: number;

  @ApiProperty({ example: 'мм', description: 'Единица измерения длины' })
  @Column({ type: DataType.STRING, defaultValue: false })
  unit_of_length: string;

  @ApiProperty({ example: '100', description: 'Масса' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  weight: number;

  @ApiProperty({ example: 'кг', description: 'Единица измерения массы' })
  @Column({ type: DataType.STRING, defaultValue: false })
  unit_of_weight: string;

  @ApiProperty({ example: '0', description: 'Нижняя граница измерений' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  measure_min: number;

  @ApiProperty({ example: '1', description: 'Верхняя граница измерений' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  measure_max: number;

  @ApiProperty({ example: 'Па', description: 'Единица измерения величины' })
  @Column({ type: DataType.STRING, defaultValue: false })
  unit_of_measuring: string;

  @ApiProperty({ example: '0.1', description: 'Относительная погрешность' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  measurement_error: number;

  @Column({ type: DataType.STRING, defaultValue: false })
  output: string;

  @ApiProperty({ example: '1 В', description: 'Питание(Вольт)' })
  @Column({ type: DataType.STRING, defaultValue: false })
  power: string;

  @ApiProperty({ example: 'класс', description: 'Класс защиты' })
  @Column({ type: DataType.STRING, defaultValue: false })
  protection_class: string;

  @ApiProperty({ example: 'К', description: 'Единица измерения температуры' })
  @Column({ type: DataType.STRING, defaultValue: false })
  temperature_unit: string;

  @ApiProperty({ description: 'Чертеж' })
  @Column({ type: DataType.STRING })
  blueprint: string;

  @ApiProperty({ example: 'Описание датчика', description: 'Описание' })
  @Column({ type: DataType.TEXT, defaultValue: false })
  description: string;

  @ApiProperty({ description: 'Схема' })
  @Column({ type: DataType.STRING })
  scheme: string;

  @ApiProperty({ description: 'Количество измерительных каналов' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  measuring_channels: number;

  @ApiProperty({ description: 'Нижний порог температуры' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  lower_temperature_threshold: number;

  @ApiProperty({ description: 'Верхний порог температуры' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  upper_temperature_threshold: number;

  @ApiProperty({
    example: 'К',
    description: 'Единица измерения нижнего порога температуры',
  })
  @Column({ type: DataType.STRING, defaultValue: false })
  measure_min_temp: string;

  @ApiProperty({
    example: 'К',
    description: 'Единица измерения верхнего порога температуры',
  })
  @Column({ type: DataType.STRING, defaultValue: false })
  measure_max_temp: string;

  @ApiProperty({ description: 'Ресурс работы(Часы)' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  resource: number;

  @ApiProperty({ description: 'Время разогрева' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  dynamic_warm_up_time: number;

  @ApiProperty({ description: 'Единицы измерения времени разогрева' })
  @Column({ type: DataType.STRING, defaultValue: false })
  din_t_heat_ed: string;

  @ApiProperty({ description: 'Коэффициент смещения' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  dynamic_shift_factor: number;

  @ApiProperty({ description: 'Постоянная времени (сек)' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  dynamic_time_constant: number;

  @ApiProperty({ description: 'Минимальная частота среза (Герц)' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  dynamic_cutoff_frequency_min: number;

  @ApiProperty({ description: 'Максимальная частота среза (Герц)' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  dynamic_cutoff_frequency_max: number;

  @ApiProperty({ description: 'Резонансная частота (Герц)' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  dynamic_resonant_frequency: number;

  @ApiProperty({ description: 'Минимальная частота среза (Герц)' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  dynamic_damping_factor: number;

  @ApiProperty({ description: 'Коэффициент стат. чувств.' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  dynamic_static_sensitivity: number;

  @ApiProperty({ description: 'Дополнительные сведения' })
  @Column({ type: DataType.TEXT })
  dynamic_description: string;

  @ApiProperty({ description: 'Динамическая погрешность (%)' })
  @Column({ type: DataType.FLOAT })
  dynamic_error: number;

  @BelongsToMany(() => Device, () => SenosrsInDevice)
  devices: Device[];

  @BelongsToMany(() => ApplicationSphere, () => SensorApplicationSphere)
  application_spheres: ApplicationSphere[];

  @BelongsToMany(() => Environment, () => SensorEnvironment)
  environments: Environment[];

  @BelongsToMany(() => Literature, () => SensorLiterature)
  literatures: Literature[];

  @BelongsToMany(() => MeasurableValue, () => SensorMeasurableValue)
  measurable_values: MeasurableValue[];

  @BelongsToMany(() => SensorType, () => SensorSensorType)
  type: SensorType[];

  @BelongsToMany(() => SignalConversation, () => SensorSignalConversation)
  signal_conversations: SignalConversation[];

  @BelongsToMany(() => OutputSignal, () => SensorOutputSignal)
  output_signals: OutputSignal[];

  @BelongsToMany(() => ManufacturingTechnology, () => SensorManufacturingTechnology)
  manufacturing_technologys: ManufacturingTechnology[];

  @BelongsToMany(() => Producer, () => SensorProducer)
  producers: Producer[];

  @BelongsToMany(() => OperationPrinciple, () => SensorOperationPrinciple)
  operation_principles: OperationPrinciple[];

  @BelongsToMany(() => SensetiveElement, () => SensorSensetiveElement)
  sensitive_elements: SensetiveElement[];
}
