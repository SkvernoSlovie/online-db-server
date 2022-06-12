import { Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { MeasurableValueService } from "./measurable-value.service";
import { CreateMeasurableValueDto } from "./dto/create-measurable-value.dto";
import { DeleteMeasurableDto } from "./dto/delete-measurable-value.dto";
import { MeasurableValue } from "./measurable-value.model";

@ApiTags("Измеряемая величина")
@Controller("measurable-value")
export class MeasurableValueController {
  constructor(private measurableValueService: MeasurableValueService) {}

  @ApiOperation({ summary: "Создание измеряемой величины" })
  @ApiResponse({ status: 200, type: MeasurableValue })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateMeasurableValueDto) {
    return this.measurableValueService.createMeasurableValue(dto);
  }

  @ApiOperation({ summary: "Получить список измеряемых величин" })
  @ApiResponse({ status: 200, type: [MeasurableValue] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.measurableValueService.getAllMeasurableValues();
  }

  @ApiOperation({ summary: "Удалить измеряемую величину" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteMeasurableDto) {
    return this.measurableValueService.deleteMeasurableValue(dto);
  }
}
