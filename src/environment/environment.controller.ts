import { Controller, Delete, Post, Get, UseGuards, Body } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { CreateEnvironmentDto } from "./dto/create-environment.dto";
import { DeleteEnvironmentDto } from "./dto/delete-environment.dto";
import { Environment } from "./environment.model";
import { EnvironmentService } from "./environment.service";

@Controller("environment")
export class EnvironmentController {
  constructor(private environmentService: EnvironmentService) {}

  @ApiOperation({ summary: "Создание агрегатного состояния" })
  @ApiResponse({ status: 200, type: Environment })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() environmentDto: CreateEnvironmentDto) {
    return this.environmentService.createEnvironment(environmentDto);
  }

  @ApiOperation({ summary: "Получить список агрегатных состояний" })
  @ApiResponse({ status: 200, type: [Environment] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.environmentService.getAllEnvironments();
  }

  @ApiOperation({ summary: "Удалить агрегатное состояние" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteEnvironmentDto) {
    return this.environmentService.deleteEnvironment(dto);
  }
}
