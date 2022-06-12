import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOperationPrincipleDto } from './dto/create-operation-principle.dto';
import { DeleteOperationPrincipleDto } from './dto/delete-operation-principle.dto';
import { OperationPrinciple } from './operation-principle.model';

@Injectable()
export class OperationPrincipleService {
  constructor(
    @InjectModel(OperationPrinciple)
    private operationPrincipleRepository: typeof OperationPrinciple,
  ) {}

  async createOperationPrinciple(dto: CreateOperationPrincipleDto) {
    const operationPrinciple = await this.operationPrincipleRepository.create(dto);

    return operationPrinciple;
  }

  async getAllOperationPrinciples() {
    const operationPrinciples = await this.operationPrincipleRepository.findAll({
      include: { all: true },
    });
    return operationPrinciples;
  }

  async deleteOperationPrinciple(dto: DeleteOperationPrincipleDto) {
    const isDeleted = await this.operationPrincipleRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Принцип работы не найден', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getOperationPrincipleByValue(value: string) {
    const operPrin = await this.operationPrincipleRepository.findOne({ where: { name: value } });
    return operPrin;
  }
}
