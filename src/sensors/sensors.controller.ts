import { Body, Controller, Get, Post, Put, UseGuards, Delete } from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Sensor } from './sensors.model';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { DeleteSensorDto } from './dto/delete-sensor.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles-auth.decorator';

@ApiTags('Датчики')
@Controller('sensors')
export class SensorsController {
  constructor(private sensorsService: SensorsService) {}

  @ApiOperation({ summary: 'Добавление датчика' })
  @ApiResponse({ status: 200, type: Sensor })
  @Post()
  createSensor(@Body() sensorDto: CreateSensorDto) {
    return this.sensorsService.createSensor(sensorDto);
  }

  @ApiOperation({ summary: 'Получить все датчики' })
  @ApiResponse({ status: 200, type: [Sensor] })
  @Get()
  getAllSensors() {
    return this.sensorsService.getAllSensors();
  }

  // @ApiOperation({ summary: "Обновление информации по датчику" })
  // @ApiResponse({ status: 200, type: [Sensor] })
  // @Roles("ADMIN")
  // @UseGuards(RolesGuard)
  // @Put()
  // updateSensorById(@Body() sensorDto: UpdateSensorDto) {
  //   return this.sensorsService.updateSensor(sensorDto);
  // }

  @ApiOperation({ summary: 'Удалить датчик по id' })
  @ApiResponse({ status: 200, type: [Sensor] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete()
  deleteSensorById(@Body() sensorDto: DeleteSensorDto) {
    return this.sensorsService.deleteSensor(sensorDto);
  }
}
