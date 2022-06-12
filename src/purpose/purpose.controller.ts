import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { PurposeService } from './purpose.service';
import { Purpose } from './purpose.model';
import { CreatePurposeDto } from './dto/create-purpose.dto';
import { DeletePurposeDto } from './dto/delete-purpose.dto';

@ApiTags('Назначение')
@Controller('purpose')
export class PurposeController {
  constructor(private purposeService: PurposeService) {}

  @ApiOperation({ summary: 'Создание сферы применения' })
  @ApiResponse({ status: 200, type: Purpose })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreatePurposeDto) {
    return this.purposeService.createPurpose(dto);
  }

  @ApiOperation({ summary: 'Получить список сфер применения' })
  @ApiResponse({ status: 200, type: [Purpose] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.purposeService.getAllPurposes();
  }

  @ApiOperation({ summary: 'Удалить сферу применения' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeletePurposeDto) {
    return this.purposeService.deletePurpose(dto);
  }
}
