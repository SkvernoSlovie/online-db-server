import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateShowTypeDto } from './dto/create-show-type.dto';
import { DeleteShowTypeDto } from './dto/delete-show-type.dto';
import { MeasurableShowType } from './measure-show-type.model';

@Injectable()
export class MeasureShowTypeService {
  constructor(
    @InjectModel(MeasurableShowType)
    private showTypeRepository: typeof MeasurableShowType,
  ) {}

  async createShowType(dto: CreateShowTypeDto) {
    const showType = await this.showTypeRepository.create(dto);

    return showType;
  }

  async getAllShowTypes() {
    const showTypes = await this.showTypeRepository.findAll({
      include: { all: true },
    });
    return showTypes;
  }

  async deleteShowType(dto: DeleteShowTypeDto) {
    const isDeleted = await this.showTypeRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Измеряемая величина не найдена', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getShowTypeByValue(value: string) {
    const showType = await this.showTypeRepository.findOne({ where: { name: value } });
    return showType;
  }
}
