import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProducerController } from './producer.controller';
import { Producer } from './producer.model';
import { ProducerService } from './producer.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ProducerController],
  providers: [ProducerService],
  imports: [SequelizeModule.forFeature([Producer]), forwardRef(() => AuthModule)],
  exports: [ProducerService],
})
export class ProducerModule {}
