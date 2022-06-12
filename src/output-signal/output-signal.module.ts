import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OutputSignalController } from './output-signal.controller';
import { OutputSignal } from './output-signal.model';
import { OutputSignalService } from './output-signal.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [OutputSignalController],
  providers: [OutputSignalService],
  imports: [SequelizeModule.forFeature([OutputSignal]), forwardRef(() => AuthModule)],
  exports: [OutputSignalService],
})
export class OutputSignalModule {}
