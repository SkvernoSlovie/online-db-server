import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { SensorType } from './sensor-type.model';
import { DeleteSensorTypeDto } from './dto/delete-sensor-type.dto';
import { CreateSensorTypeDto } from './dto/create-sensor-type.dto';
import { SensorTypeService } from './sensor-type.service';

@ApiTags('Тип')
@Controller('sensor-type')
export class SensorTypeController {
  constructor(private sensorTypeService: SensorTypeService) {}

  @ApiOperation({ summary: 'Создание типа' })
  @ApiResponse({ status: 200, type: SensorType })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateSensorTypeDto) {
    return this.sensorTypeService.createSensorType(dto);
  }

  @ApiOperation({ summary: 'Получить список типов' })
  @ApiResponse({ status: 200, type: [SensorType] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.sensorTypeService.getAllSensorsTypes();
  }

  @ApiOperation({ summary: 'Удалить тип' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteSensorTypeDto) {
    return this.sensorTypeService.deleteSensorType(dto);
  }
}
