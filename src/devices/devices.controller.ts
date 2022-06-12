import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  UseGuards,
  Delete,
} from "@nestjs/common";
import { DevicesService } from "./devices.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Device } from "./device.model";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import { DeleteDeviceDto } from "./dto/delete-device.dto";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles-auth.decorator";

@ApiTags("Приборы")
@Controller("devices")
export class DevicesController {
  constructor(private devicesService: DevicesService) {}

  @ApiOperation({ summary: "Добавление прибора" })
  @ApiResponse({ status: 200, type: Device })
  @Post()
  createDevice(@Body() deviceDto: CreateDeviceDto) {
    return this.devicesService.createDevice(deviceDto);
  }

  @ApiOperation({ summary: "Получить все приборы" })
  @ApiResponse({ status: 200, type: [Device] })
  @Get()
  getAllDevices() {
    return this.devicesService.getAllDevices();
  }

  // @ApiOperation({ summary: "Обновление информации по прибору" })
  // @ApiResponse({ status: 200, type: [Device] })
  // @Roles("ADMIN")
  // @UseGuards(RolesGuard)
  // @Put()
  // updateDeviceById(@Body() deviceDto: UpdateDeviceDto) {
  //   return this.devicesService.updateDevice(deviceDto);
  // }

  @ApiOperation({ summary: "Удалить прибор по id" })
  @ApiResponse({ status: 200, type: [Device] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  deleteDeviceById(@Body() deviceDto: DeleteDeviceDto) {
    return this.devicesService.deleteDevice(deviceDto);
  }
}
