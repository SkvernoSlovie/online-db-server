import { Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { ApplicationSphereService } from "./application-sphere.service";
import { ApplicationSphere } from "./application-sphere.model";
import { CreateApplicationSphereDto } from "./dto/create-application-sphere.dto";
import { DeleteApplicationSphereDto } from "./dto/delete-application-sphere.dto";

@ApiTags("Сфера применения")
@Controller("application-sphere")
export class ApplicationSphereController {
  constructor(private applicationSphereService: ApplicationSphereService) {}

  @ApiOperation({ summary: "Создание сферы применения" })
  @ApiResponse({ status: 200, type: ApplicationSphere })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() applicationSphereDto: CreateApplicationSphereDto) {
    return this.applicationSphereService.createApplicationSphere(
      applicationSphereDto
    );
  }

  @ApiOperation({ summary: "Получить список сфер применения" })
  @ApiResponse({ status: 200, type: [ApplicationSphere] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.applicationSphereService.getAllApplicationSphere();
  }

  @ApiOperation({ summary: "Удалить сферу применения" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteApplicationSphereDto) {
    return this.applicationSphereService.deleteApplicationSphere(dto);
  }
}
