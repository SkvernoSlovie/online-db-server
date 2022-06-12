import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEnvironmentDto } from './dto/create-environment.dto';
import { DeleteEnvironmentDto } from './dto/delete-environment.dto';
import { Environment } from './environment.model';

@Injectable()
export class EnvironmentService {
  constructor(
    @InjectModel(Environment)
    private environmentRepository: typeof Environment,
  ) {}

  async createEnvironment(dto: CreateEnvironmentDto) {
    const environment = await this.environmentRepository.create(dto);

    return environment;
  }

  async getAllEnvironments() {
    const environments = await this.environmentRepository.findAll({
      include: { all: true },
    });
    return environments;
  }

  async deleteEnvironment(dto: DeleteEnvironmentDto) {
    const isDeleted = await this.environmentRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Агрегатное состояние не найдено', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getEnvironmentByValue(value: string) {
    const environment = await this.environmentRepository.findOne({ where: { name: value } });
    return environment;
  }
}
