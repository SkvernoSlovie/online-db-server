import { Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { TypeService } from "./type.service";
import { DeleteTypeDto } from "./dto/delete-type.dto";
import { CreateTypeDto } from "./dto/create-type.dto";
import { Type } from "./type.model";

@ApiTags("Тип")
@Controller("type")
export class TypeController {
  constructor(private typeService: TypeService) {}

  @ApiOperation({ summary: "Создание типа" })
  @ApiResponse({ status: 200, type: Type })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateTypeDto) {
    return this.typeService.createType(dto);
  }

  @ApiOperation({ summary: "Получить список типов" })
  @ApiResponse({ status: 200, type: [Type] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.typeService.getAllTypes();
  }

  @ApiOperation({ summary: "Удалить тип" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteTypeDto) {
    return this.typeService.deleteType(dto);
  }
}
