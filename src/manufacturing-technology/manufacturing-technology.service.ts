import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateManufacturingTechnology } from './dto/create-manufacturing-technology.dto';
import { DeleteManufacturingTechnology } from './dto/delete-manufacturing-technology.dto';
import { ManufacturingTechnology } from './manufacturing-technology.model';

@Injectable()
export class ManufacturingTechnologyService {
  constructor(
    @InjectModel(ManufacturingTechnology)
    private manufacturingTechnologyRepository: typeof ManufacturingTechnology,
  ) {}

  async createManufacturingTechnology(dto: CreateManufacturingTechnology) {
    const manufacturingTechnology = await this.manufacturingTechnologyRepository.create(dto);

    return manufacturingTechnology;
  }

  async getAllManufacturingTechnologes() {
    const manufacturingTechnologes = await this.manufacturingTechnologyRepository.findAll({
      include: { all: true },
    });
    return manufacturingTechnologes;
  }

  async deleteManufacturingTechnology(dto: DeleteManufacturingTechnology) {
    const isDeleted = await this.manufacturingTechnologyRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Технология изготовления не найдена', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getManufacturingTechnologyByValue(value: string) {
    const manufTech = await this.manufacturingTechnologyRepository.findOne({ where: { name: value } });
    return manufTech;
  }
}
