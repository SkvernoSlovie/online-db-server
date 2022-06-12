import { Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { OutputSignalService } from "./output-signal.service";
import { OutputSignal } from "./output-signal.model";
import { DeleteOutputSignalDto } from "./dto/delete-output-signal.dto";
import { CreateOutputSignalDto } from "./dto/create-output-signal.dto";

@ApiTags("Выходной сигнал")
@Controller("output-signal")
export class OutputSignalController {
  constructor(private outputSignalService: OutputSignalService) {}

  @ApiOperation({ summary: "Создание выходного сигнала" })
  @ApiResponse({ status: 200, type: OutputSignal })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateOutputSignalDto) {
    return this.outputSignalService.createOutputSignal(dto);
  }

  @ApiOperation({ summary: "Получить список выходных сигналов" })
  @ApiResponse({ status: 200, type: [OutputSignal] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.outputSignalService.getAllOutputSignals();
  }

  @ApiOperation({ summary: "Удалить выходной сигнал" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteOutputSignalDto) {
    return this.outputSignalService.deleteOutputSignal(dto);
  }
}
