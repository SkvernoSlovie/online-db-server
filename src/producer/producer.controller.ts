import { Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { ProducerService } from "./producer.service";
import { CreateProducerDto } from "./dto/create-producer.dto";
import { DeleteProducerDto } from "./dto/delete-producer.dto";
import { Producer } from "./producer.model";

@ApiTags("Производитель")
@Controller("producer")
export class ProducerController {
  constructor(private producerService: ProducerService) {}

  @ApiOperation({ summary: "Создание производителя" })
  @ApiResponse({ status: 200, type: Producer })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateProducerDto) {
    return this.producerService.createProducer(dto);
  }

  @ApiOperation({ summary: "Получить список производителей" })
  @ApiResponse({ status: 200, type: [Producer] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.producerService.getAllProducers();
  }

  @ApiOperation({ summary: "Удалить производителя" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteProducerDto) {
    return this.producerService.deleteProducer(dto);
  }
}
