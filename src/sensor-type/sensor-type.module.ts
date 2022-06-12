import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SensorTypeController } from './sensor-type.controller';
import { SensorType } from './sensor-type.model';
import { SensorTypeService } from './sensor-type.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SensorTypeController],
  providers: [SensorTypeService],
  imports: [SequelizeModule.forFeature([SensorType]), forwardRef(() => AuthModule)],
  exports: [SensorTypeService],
})
export class SensorTypeModule {}
