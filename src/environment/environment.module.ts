import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EnvironmentController } from './environment.controller';
import { Environment } from './environment.model';
import { EnvironmentService } from './environment.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [EnvironmentController],
  providers: [EnvironmentService],
  imports: [SequelizeModule.forFeature([Environment]), forwardRef(() => AuthModule)],
  exports: [EnvironmentService],
})
export class EnvironmentModule {}
