import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSensetiveElementDto } from './dto/create-sensetive-element.dto';
import { DeleteSensetiveElementDto } from './dto/delete-sensetive-element.dto';
import { SensetiveElement } from './sensetive-element.model';

@Injectable()
export class SensitiveElementService {
  constructor(
    @InjectModel(SensetiveElement)
    private sensetiveElementRepository: typeof SensetiveElement,
  ) {}

  async createSensetiveElement(dto: CreateSensetiveElementDto) {
    const sensetiveElement = await this.sensetiveElementRepository.create(dto);

    return sensetiveElement;
  }

  async getAllSensetiveElements() {
    const sensetiveElements = await this.sensetiveElementRepository.findAll({
      include: { all: true },
    });
    return sensetiveElements;
  }

  async deleteSensetiveElement(dto: DeleteSensetiveElementDto) {
    const isDeleted = await this.sensetiveElementRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Сфера применения не найдена', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getSensetiveElementByValue(value: string) {
    const sensetiveElement = await this.sensetiveElementRepository.findOne({
      where: { name: value },
    });
    return sensetiveElement;
  }
}
