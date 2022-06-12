import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApplicationSphereController } from './application-sphere.controller';
import { ApplicationSphereService } from './application-sphere.service';
import { ApplicationSphere } from './application-sphere.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ApplicationSphereController],
  providers: [ApplicationSphereService],
  imports: [SequelizeModule.forFeature([ApplicationSphere]), forwardRef(() => AuthModule)],
  exports: [ApplicationSphereService],
})
export class ApplicationSphereModule {}
