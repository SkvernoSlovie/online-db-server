import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Purpose } from './purpose.model';
import { CreatePurposeDto } from './dto/create-purpose.dto';
import { DeletePurposeDto } from './dto/delete-purpose.dto';

@Injectable()
export class PurposeService {
  constructor(
    @InjectModel(Purpose)
    private purposeRepository: typeof Purpose,
  ) {}

  async createPurpose(dto: CreatePurposeDto) {
    const purpose = await this.purposeRepository.create(dto);

    return purpose;
  }

  async getAllPurposes() {
    const purposes = await this.purposeRepository.findAll({
      include: { all: true },
    });
    return purposes;
  }

  async deletePurpose(dto: DeletePurposeDto) {
    const isDeleted = await this.purposeRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Назначение не найдено', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getPurposeByValue(value: string) {
    const purpose = await this.purposeRepository.findOne({ where: { name: value } });

    return purpose;
  }
}
