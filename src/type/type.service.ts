import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTypeDto } from './dto/create-type.dto';
import { DeleteTypeDto } from './dto/delete-type.dto';
import { Type } from './type.model';

@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type)
    private typeRepository: typeof Type,
  ) {}

  async createType(dto: CreateTypeDto) {
    const type = await this.typeRepository.create(dto);

    return type;
  }

  async getAllTypes() {
    const types = await this.typeRepository.findAll({
      include: { all: true },
    });
    return types;
  }

  async deleteType(dto: DeleteTypeDto) {
    const isDeleted = await this.typeRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Тип не найден', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getTypeByValue(value: string) {
    const type = await this.typeRepository.findOne({ where: { name: value } });
    return type;
  }
}
