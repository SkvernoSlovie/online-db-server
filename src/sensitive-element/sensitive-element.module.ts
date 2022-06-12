import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SensetiveElement } from './sensetive-element.model';
import { SensitiveElementController } from './sensitive-element.controller';
import { SensitiveElementService } from './sensitive-element.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SensitiveElementController],
  providers: [SensitiveElementService],
  imports: [SequelizeModule.forFeature([SensetiveElement]), forwardRef(() => AuthModule)],
  exports: [SensitiveElementService],
})
export class SensitiveElementModule {}
