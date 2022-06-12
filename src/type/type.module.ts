import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TypeController } from './type.controller';
import { Type } from './type.model';
import { TypeService } from './type.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [TypeController],
  providers: [TypeService],
  imports: [SequelizeModule.forFeature([Type]), forwardRef(() => AuthModule)],
  exports: [TypeService],
})
export class TypeModule {}
