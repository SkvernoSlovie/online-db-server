import { Module, forwardRef } from '@nestjs/common';
import { MeasureShowTypeService } from './measure-show-type.service';
import { MeasureShowTypeController } from './measure-show-type.controller';
import { MeasurableShowType } from './measure-show-type.model';
import { AuthModule } from 'src/auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [MeasureShowTypeService],
  controllers: [MeasureShowTypeController],
  imports: [SequelizeModule.forFeature([MeasurableShowType]), forwardRef(() => AuthModule)],
  exports: [MeasureShowTypeService],
})
export class MeasureShowTypeModule {}
