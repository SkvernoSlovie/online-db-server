import { Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { ManufacturingTechnologyService } from "./manufacturing-technology.service";
import { ManufacturingTechnology } from "./manufacturing-technology.model";
import { CreateManufacturingTechnology } from "./dto/create-manufacturing-technology.dto";
import { DeleteManufacturingTechnology } from "./dto/delete-manufacturing-technology.dto";

@ApiTags("Технология изготовления")
@Controller("manufacturing-technology")
export class ManufacturingTechnologyController {
  constructor(
    private manufacturingTechnologyService: ManufacturingTechnologyService
  ) {}

  @ApiOperation({ summary: "Создание технологии изготовления" })
  @ApiResponse({ status: 200, type: ManufacturingTechnology })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateManufacturingTechnology) {
    return this.manufacturingTechnologyService.createManufacturingTechnology(
      dto
    );
  }

  @ApiOperation({ summary: "Получить список технологий изготовления" })
  @ApiResponse({ status: 200, type: [ManufacturingTechnology] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.manufacturingTechnologyService.getAllManufacturingTechnologes();
  }

  @ApiOperation({ summary: "Удалить технологию изготовления" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteManufacturingTechnology) {
    return this.manufacturingTechnologyService.deleteManufacturingTechnology(
      dto
    );
  }
}
