import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMeasurableValueDto } from './dto/create-measurable-value.dto';
import { DeleteMeasurableDto } from './dto/delete-measurable-value.dto';
import { MeasurableValue } from './measurable-value.model';

@Injectable()
export class MeasurableValueService {
  constructor(
    @InjectModel(MeasurableValue)
    private measurableValueRepository: typeof MeasurableValue,
  ) {}

  async createMeasurableValue(dto: CreateMeasurableValueDto) {
    const measurableValue = await this.measurableValueRepository.create(dto);

    return measurableValue;
  }

  async getAllMeasurableValues() {
    const measurableValues = await this.measurableValueRepository.findAll({
      include: { all: true },
    });
    return measurableValues;
  }

  async deleteMeasurableValue(dto: DeleteMeasurableDto) {
    const isDeleted = await this.measurableValueRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Измеряемая величина не найдена', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getMeasurableValueByValue(value: string) {
    const measurValue = await this.measurableValueRepository.findOne({ where: { name: value } });
    return measurValue;
  }
}
