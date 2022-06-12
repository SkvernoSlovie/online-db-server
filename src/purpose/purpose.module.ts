import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PurposeController } from './purpose.controller';
import { PurposeService } from './purpose.service';
import { AuthModule } from 'src/auth/auth.module';
import { Purpose } from './purpose.model';

@Module({
  controllers: [PurposeController],
  providers: [PurposeService],
  imports: [SequelizeModule.forFeature([Purpose]), forwardRef(() => AuthModule)],
  exports: [PurposeService],
})
export class PurposeModule {}
