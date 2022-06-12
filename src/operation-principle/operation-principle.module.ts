import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OperationPrincipleController } from './operation-principle.controller';
import { OperationPrinciple } from './operation-principle.model';
import { OperationPrincipleService } from './operation-principle.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [OperationPrincipleController],
  providers: [OperationPrincipleService],
  imports: [SequelizeModule.forFeature([OperationPrinciple]), forwardRef(() => AuthModule)],
  exports: [OperationPrincipleService],
})
export class OperationPrincipleModule {}
