import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LiteratureController } from './literature.controller';
import { Literature } from './literature.model';
import { LiteratureService } from './literature.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [LiteratureController],
  providers: [LiteratureService],
  imports: [SequelizeModule.forFeature([Literature]), forwardRef(() => AuthModule)],
  exports: [LiteratureService],
})
export class LiteratureModule {}
