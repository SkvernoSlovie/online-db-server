import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOutputSignalDto } from './dto/create-output-signal.dto';
import { DeleteOutputSignalDto } from './dto/delete-output-signal.dto';
import { OutputSignal } from './output-signal.model';

@Injectable()
export class OutputSignalService {
  constructor(
    @InjectModel(OutputSignal)
    private outputSignalRepository: typeof OutputSignal,
  ) {}

  async createOutputSignal(dto: CreateOutputSignalDto) {
    const outputSignal = await this.outputSignalRepository.create(dto);

    return outputSignal;
  }

  async getAllOutputSignals() {
    const outputSignal = await this.outputSignalRepository.findAll({
      include: { all: true },
    });
    return outputSignal;
  }

  async deleteOutputSignal(dto: DeleteOutputSignalDto) {
    const isDeleted = await this.outputSignalRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Выходной сигнал не найден', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getOutputSignalByValue(value: string) {
    const outputSignal = await this.outputSignalRepository.findOne({ where: { name: value } });
    return outputSignal;
  }
}
