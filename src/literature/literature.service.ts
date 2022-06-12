import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLiteratureDto } from './dto/create-literature.dto';
import { DeleteLiteratureDto } from './dto/delete-literature.dto';
import { Literature } from './literature.model';

@Injectable()
export class LiteratureService {
  constructor(
    @InjectModel(Literature)
    private literatureRepository: typeof Literature,
  ) {}

  async createLiterature(dto: CreateLiteratureDto) {
    const literature = await this.literatureRepository.create(dto);

    return literature;
  }

  async getAllLiteratures() {
    const literatures = await this.literatureRepository.findAll({
      include: { all: true },
    });
    return literatures;
  }

  async deleteLiterature(dto: DeleteLiteratureDto) {
    const isDeleted = await this.literatureRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Литературный источник не найден', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getLiteratureByValue(value: string) {
    const literature = await this.literatureRepository.findOne({ where: { name: value } });
    return literature;
  }
}
