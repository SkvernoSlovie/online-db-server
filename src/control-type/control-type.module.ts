import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ControlTypeController } from './control-type.controller';
import { ControlType } from './control-type.model';
import { ControlTypeService } from './control-type.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ControlTypeController],
  providers: [ControlTypeService],
  imports: [SequelizeModule.forFeature([ControlType]), forwardRef(() => AuthModule)],
  exports: [ControlTypeService],
})
export class ControlTypeModule {}
