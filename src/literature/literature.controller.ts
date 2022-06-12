import { Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { LiteratureService } from "./literature.service";
import { CreateLiteratureDto } from "./dto/create-literature.dto";
import { DeleteLiteratureDto } from "./dto/delete-literature.dto";
import { Literature } from "./literature.model";

@ApiTags("Литература")
@Controller("literature")
export class LiteratureController {
  constructor(private literatureService: LiteratureService) {}

  @ApiOperation({ summary: "Создание литературного источника" })
  @ApiResponse({ status: 200, type: Literature })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateLiteratureDto) {
    return this.literatureService.createLiterature(dto);
  }

  @ApiOperation({ summary: "Получить список литературных источников" })
  @ApiResponse({ status: 200, type: [Literature] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.literatureService.getAllLiteratures();
  }

  @ApiOperation({ summary: "Удалить литературный источник" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteLiteratureDto) {
    return this.literatureService.deleteLiterature(dto);
  }
}
