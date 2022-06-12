import { Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { SensitiveElementService } from "./sensitive-element.service";
import { CreateSensetiveElementDto } from "./dto/create-sensetive-element.dto";
import { DeleteSensetiveElementDto } from "./dto/delete-sensetive-element.dto";
import { SensetiveElement } from "./sensetive-element.model";

@ApiTags("Сфера применения")
@Controller("sensitive-element")
export class SensitiveElementController {
  constructor(private sensitiveElementService: SensitiveElementService) {}

  @ApiOperation({ summary: "Создание сферы применения" })
  @ApiResponse({ status: 200, type: SensetiveElement })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateSensetiveElementDto) {
    return this.sensitiveElementService.createSensetiveElement(dto);
  }

  @ApiOperation({ summary: "Получить список сфер применения" })
  @ApiResponse({ status: 200, type: [SensetiveElement] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.sensitiveElementService.getAllSensetiveElements();
  }

  @ApiOperation({ summary: "Удалить сферу применения" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteSensetiveElementDto) {
    return this.sensitiveElementService.deleteSensetiveElement(dto);
  }
}
