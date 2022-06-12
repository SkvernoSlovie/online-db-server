import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSignalConversationDto } from './dto/create-signal-conversation.dto';
import { DeleteSignalConversationDto } from './dto/delete-signal-conversation.dto';
import { SignalConversation } from './signal-conversation.model';

@Injectable()
export class SignalConversationService {
  constructor(
    @InjectModel(SignalConversation)
    private signalConversationRepository: typeof SignalConversation,
  ) {}

  async createSignalConversation(dto: CreateSignalConversationDto) {
    const signalConversation = await this.signalConversationRepository.create(dto);

    return signalConversation;
  }

  async getAllSignalConversations() {
    const signalConversations = await this.signalConversationRepository.findAll({
      include: { all: true },
    });
    return signalConversations;
  }

  async deleteSignalConversation(dto: DeleteSignalConversationDto) {
    const isDeleted = await this.signalConversationRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Преобразование сигнала не найдено', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getSignalConvByValue(value: string) {
    const signalConv = await this.signalConversationRepository.findOne({ where: { name: value } });
    return signalConv;
  }
}
