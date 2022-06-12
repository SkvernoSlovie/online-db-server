import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDto {
  @ApiProperty({ example: 'AD-12', description: 'Название' })
  readonly name: string;

  @ApiProperty({ description: 'Входное сопротивление' })
  readonly in_resistance: string;

  @ApiProperty({ description: 'Выходное сопротивление' })
  readonly out_resistance: string;

  @ApiProperty({ example: '100', description: 'Ширина' })
  readonly width: number;

  @ApiProperty({ example: '100', description: 'Высота' })
  readonly height: number;

  @ApiProperty({ example: '100', description: 'Длина' })
  readonly length: number;

  @ApiProperty({ example: '100', description: 'Диаметр' })
  readonly diameter: number;

  @ApiProperty({ example: 'мм', description: 'Единица измерения длины' })
  readonly unit_of_length: string;

  @ApiProperty({ example: '100', description: 'Масса' })
  readonly weight: number;

  @ApiProperty({ example: 'кг', description: 'Единица измерения массы' })
  readonly unit_of_weight: string;

  @ApiProperty({ example: '0', description: 'Нижняя граница измерений' })
  readonly measure_min: number;

  @ApiProperty({ example: '1', description: 'Верхняя граница измерений' })
  readonly measure_max: number;

  @ApiProperty({ example: 'Па', description: 'Единица измерения величины' })
  readonly unit_of_measuring: string;

  @ApiProperty({ example: '0.1', description: 'Относительная погрешность' })
  readonly measurement_error: number;

  readonly output: string;

  @ApiProperty({ example: '1 В', description: 'Питание(Вольт)' })
  readonly power: string;

  @ApiProperty({ example: 'класс', description: 'Класс защиты' })
  readonly protection_class: string;

  @ApiProperty({ example: 'К', description: 'Единица измерения температуры' })
  readonly temperature_unit: string;

  @ApiProperty({ example: 'Описание датчика', description: 'Описание' })
  readonly description: string;

  @ApiProperty({ description: 'Количество измерительных каналов' })
  readonly measuring_channels: number;

  @ApiProperty({ description: 'Нижний порог температуры' })
  readonly lower_temperature_threshold: number;

  @ApiProperty({ description: 'Верхний порог температуры' })
  readonly upper_temperature_threshold: number;

  @ApiProperty({
    example: 'К',
    description: 'Единица измерения нижнего порога температуры',
  })
  readonly measure_min_temp: string;

  @ApiProperty({
    example: 'К',
    description: 'Единица измерения верхнего порога температуры',
  })
  readonly measure_max_temp: string;

  @ApiProperty({ description: 'Ресурс работы(Часы)' })
  readonly resource: number;

  @ApiProperty({ description: 'Время разогрева' })
  readonly dynamic_warm_up_time: number;

  @ApiProperty({ description: 'Единицы измерения времени разогрева' })
  readonly din_t_heat_ed: string;

  @ApiProperty({ description: 'Коэффициент смещения' })
  readonly dynamic_shift_factor: number;

  @ApiProperty({ description: 'Постоянная времени (сек)' })
  readonly dynamic_time_constant: number;

  @ApiProperty({ description: 'Минимальная частота среза (Герц)' })
  readonly dynamic_cutoff_frequency_min: number;

  @ApiProperty({ description: 'Максимальная частота среза (Герц)' })
  readonly dynamic_cutoff_frequency_max: number;

  @ApiProperty({ description: 'Резонансная частота (Герц)' })
  readonly dynamic_resonant_frequency: number;

  @ApiProperty({ description: 'Минимальная частота среза (Герц)' })
  readonly dynamic_damping_factor: number;

  @ApiProperty({ description: 'Коэффициент стат. чувств.' })
  readonly dynamic_static_sensitivity: number;

  @ApiProperty({ description: 'Дополнительные сведения' })
  readonly dynamic_description: string;

  @ApiProperty({ description: 'Динамическая погрешность (%)' })
  readonly dynamic_error: number;

  @ApiProperty({ description: 'Выходное напряжение' })
  readonly output_voltage: string;

  readonly ad_running_time_unit: string;

  readonly din_t_heat_ed_ad: string;

  readonly din_faz_sdvig_ad: number;

  @ApiProperty({ description: 'Датчик' })
  readonly sensor: string;

  @ApiProperty({ description: 'Тип управления' })
  readonly control_type: string;

  @ApiProperty({ description: 'Датчик' })
  readonly type: string;

  @ApiProperty({ description: 'Датчик' })
  readonly manufacturing_technology: string;

  @ApiProperty({ description: 'Датчик' })
  readonly producer: string;

  @ApiProperty({ description: 'Датчик' })
  readonly purpose: string;

  @ApiProperty({ description: 'Датчик' })
  readonly operation_principle: string;

  @ApiProperty({ description: 'Датчик' })
  readonly measurable_show_type: string;
}
