import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MeasurableValueController } from './measurable-value.controller';
import { MeasurableValue } from './measurable-value.model';
import { MeasurableValueService } from './measurable-value.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [MeasurableValueController],
  providers: [MeasurableValueService],
  imports: [SequelizeModule.forFeature([MeasurableValue]), forwardRef(() => AuthModule)],
  exports: [MeasurableValueService],
})
export class MeasurableValueModule {}
