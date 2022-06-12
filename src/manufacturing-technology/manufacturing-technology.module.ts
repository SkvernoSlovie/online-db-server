import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ManufacturingTechnologyController } from './manufacturing-technology.controller';
import { ManufacturingTechnologyService } from './manufacturing-technology.service';
import { AuthModule } from 'src/auth/auth.module';
import { ManufacturingTechnology } from './manufacturing-technology.model';

@Module({
  controllers: [ManufacturingTechnologyController],
  providers: [ManufacturingTechnologyService],
  imports: [SequelizeModule.forFeature([ManufacturingTechnology]), forwardRef(() => AuthModule)],
  exports: [ManufacturingTechnologyService],
})
export class ManufacturingTechnologyModule {}
