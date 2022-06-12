import { Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { SignalConversationService } from "./signal-conversation.service";
import { CreateSignalConversationDto } from "./dto/create-signal-conversation.dto";
import { DeleteSignalConversationDto } from "./dto/delete-signal-conversation.dto";
import { SignalConversation } from "./signal-conversation.model";

@ApiTags("Преобразование сигнала")
@Controller("signal-conversation")
export class SignalConversationController {
  constructor(private signalConversationService: SignalConversationService) {}

  @ApiOperation({ summary: "Создание преобразования сигнала" })
  @ApiResponse({ status: 200, type: SignalConversation })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateSignalConversationDto) {
    return this.signalConversationService.createSignalConversation(dto);
  }

  @ApiOperation({ summary: "Получить список преобразований сигнала" })
  @ApiResponse({ status: 200, type: [SignalConversation] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.signalConversationService.getAllSignalConversations();
  }

  @ApiOperation({ summary: "Удалить преобразование сигнала" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteSignalConversationDto) {
    return this.signalConversationService.deleteSignalConversation(dto);
  }
}
