import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSensorTypeDto } from './dto/create-sensor-type.dto';
import { DeleteSensorTypeDto } from './dto/delete-sensor-type.dto';
import { SensorType } from './sensor-type.model';

@Injectable()
export class SensorTypeService {
  constructor(
    @InjectModel(SensorType)
    private typeRepository: typeof SensorType,
  ) {}

  async createSensorType(dto: CreateSensorTypeDto) {
    const type = await this.typeRepository.create(dto);

    return type;
  }

  async getAllSensorsTypes() {
    const types = await this.typeRepository.findAll({
      include: { all: true },
    });
    return types;
  }

  async deleteSensorType(dto: DeleteSensorTypeDto) {
    const isDeleted = await this.typeRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Тип не найден', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getSensorTypeByValue(value: string) {
    const type = await this.typeRepository.findOne({ where: { name: value } });
    return type;
  }
}
