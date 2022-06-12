import { Module } from '@nestjs/common';
import { DeviceMeasureShowTypeController } from './device-measure-show-type.controller';
import { DeviceMeasureShowTypeService } from './device-measure-show-type.service';

@Module({
  controllers: [DeviceMeasureShowTypeController],
  providers: [DeviceMeasureShowTypeService]
})
export class DeviceMeasureShowTypeModule {}
