import { Module } from '@nestjs/common';
import { DevicePurposeController } from './device-purpose.controller';
import { DevicePurposeService } from './device-purpose.service';

@Module({
  controllers: [DevicePurposeController],
  providers: [DevicePurposeService]
})
export class DevicePurposeModule {}
