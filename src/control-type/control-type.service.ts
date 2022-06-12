import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ControlType } from './control-type.model';
import { CreateControlTypeDto } from './dto/create-control-type.dto';
import { DeleteControlType } from './dto/delete-control-type.dto';

@Injectable()
export class ControlTypeService {
  constructor(
    @InjectModel(ControlType)
    private controlTypeRepository: typeof ControlType,
  ) {}

  async createControlType(dto: CreateControlTypeDto) {
    const controlType = await this.controlTypeRepository.create(dto);

    return controlType;
  }

  async getAllControlTypes() {
    const controlTypes = await this.controlTypeRepository.findAll({
      include: { all: true },
    });
    return controlTypes;
  }

  async deleteControllType(dto: DeleteControlType) {
    const isDeleted = await this.controlTypeRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Тип управления не найден', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getControlTypeByValue(value: string) {
    const controlType = await this.controlTypeRepository.findOne({ where: { name: value } });

    return controlType;
  }
}
