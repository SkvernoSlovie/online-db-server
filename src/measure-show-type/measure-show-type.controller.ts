import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { MeasureShowTypeService } from './measure-show-type.service';
import { DeleteShowTypeDto } from './dto/delete-show-type.dto';
import { CreateShowTypeDto } from './dto/create-show-type.dto';
import { MeasurableShowType } from './measure-show-type.model';

@ApiTags('Воспроизведение измеряемой величины')
@Controller('measure-show-type')
export class MeasureShowTypeController {
  constructor(private measureShowTypeService: MeasureShowTypeService) {}

  @ApiOperation({ summary: 'Создание воспроизведения измеряемой величины' })
  @ApiResponse({ status: 200, type: MeasurableShowType })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateShowTypeDto) {
    return this.measureShowTypeService.createShowType(dto);
  }

  @ApiOperation({ summary: 'Получить список способов воспроизведения измеряемой величины' })
  @ApiResponse({ status: 200, type: [MeasurableShowType] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.measureShowTypeService.getAllShowTypes();
  }

  @ApiOperation({ summary: 'Удалить способ воспроизведения измеряемой величины' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteShowTypeDto) {
    return this.measureShowTypeService.deleteShowType(dto);
  }
}
