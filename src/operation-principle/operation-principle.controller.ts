import { Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { OperationPrincipleService } from "./operation-principle.service";
import { CreateOperationPrincipleDto } from "./dto/create-operation-principle.dto";
import { OperationPrinciple } from "./operation-principle.model";
import { DeleteOperationPrincipleDto } from "./dto/delete-operation-principle.dto";

@ApiTags("Принцип работы")
@Controller("operation-principle")
export class OperationPrincipleController {
  constructor(private operationPrincipleService: OperationPrincipleService) {}

  @ApiOperation({ summary: "Создание принципа работы" })
  @ApiResponse({ status: 200, type: OperationPrinciple })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateOperationPrincipleDto) {
    return this.operationPrincipleService.createOperationPrinciple(dto);
  }

  @ApiOperation({ summary: "Получить список принципов работы" })
  @ApiResponse({ status: 200, type: [OperationPrinciple] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.operationPrincipleService.getAllOperationPrinciples();
  }

  @ApiOperation({ summary: "Удалить принцип работы" })
  @ApiResponse({ status: 200 })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  delete(@Body() dto: DeleteOperationPrincipleDto) {
    return this.operationPrincipleService.deleteOperationPrinciple(dto);
  }
}
