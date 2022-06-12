import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProducerDto } from './dto/create-producer.dto';
import { DeleteProducerDto } from './dto/delete-producer.dto';
import { Producer } from './producer.model';

@Injectable()
export class ProducerService {
  constructor(
    @InjectModel(Producer)
    private producerRepository: typeof Producer,
  ) {}

  async createProducer(dto: CreateProducerDto) {
    const producer = await this.producerRepository.create(dto);

    return producer;
  }

  async getAllProducers() {
    const producers = await this.producerRepository.findAll({
      include: { all: true },
    });
    return producers;
  }

  async deleteProducer(dto: DeleteProducerDto) {
    const isDeleted = await this.producerRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Производитель не найден', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getProducerByValue(value: string) {
    const producer = await this.producerRepository.findOne({ where: { name: value } });
    return producer;
  }
}
