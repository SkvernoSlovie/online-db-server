import { Controller, UseGuards, Post, Body, Get, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ControlType } from './control-type.model';
import { ControlTypeService } from './control-type.service';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { CreateControlTypeDto } from './dto/create-control-type.dto';
import { DeleteControlType } from './dto/delete-control-type.dto';

@ApiTags('Тип управления')
@Controller('control-type')
export class ControlTypeController {
  constructor(private controlTypeService: ControlTypeService) {}

  @ApiOperation({ summary: 'Создание типа управления' })
  @ApiResponse({ status: 200, type: ControlType })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() controlTypeDto: CreateControlTypeDto) {
    return this.controlTypeService.createControlType(controlTypeDto);
  }

  @ApiOperation({ summary: 'Получить список типов управления' })
  @ApiResponse({ status: 200, type: [ControlType] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.controlTypeService.getAllControlTypes();
  }

  @ApiOperation({ summary: 'Удалить тип управления' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteControlType) {
    return this.controlTypeService.deleteControllType(dto);
  }
}
