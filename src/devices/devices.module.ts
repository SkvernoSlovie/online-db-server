import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Device } from './device.model';
import { Sensor } from 'src/sensors/sensors.model';
import { SenosrsInDevice } from './sensors-in-device.model';
import { DeviceApplicationSphere } from 'src/application-sphere/devices-applecation-sphere.model';
import { OperationPrincipleService } from 'src/operation-principle/operation-principle.service';
import { OperationPrinciple } from 'src/operation-principle/operation-principle.model';
import { Type } from 'src/type/type.model';
import { DeviceType } from 'src/type/device-type.model';
import { Producer } from 'src/producer/producer.model';
import { DeviceProducer } from 'src/producer/device-producer.model';
import { ManufacturingTechnology } from 'src/manufacturing-technology/manufacturing-technology.model';
import { DeviceOperationPrinciple } from 'src/operation-principle/device-operation-principle.model';
import { DeviceManufacturingTechnology } from 'src/manufacturing-technology/device-manufacturing-technology.model';
import { ControlType } from 'src/control-type/control-type.model';
import { DeviceControlType } from 'src/control-type/device-control-type.model';
import { Purpose } from 'src/purpose/purpose.model';
import { DevicePurpose } from 'src/purpose/device-purpose.model';
import { SensorsModule } from 'src/sensors/sensors.module';
import { OperationPrincipleModule } from 'src/operation-principle/operation-principle.module';
import { TypeModule } from 'src/type/type.module';
import { ProducerModule } from 'src/producer/producer.module';
import { ManufacturingTechnologyModule } from 'src/manufacturing-technology/manufacturing-technology.module';
import { ControlTypeModule } from 'src/control-type/control-type.module';
import { PurposeModule } from 'src/purpose/purpose.module';
import { MeasureShowTypeModule } from 'src/measure-show-type/measure-show-type.module';

@Module({
  controllers: [DevicesController],
  providers: [DevicesService],
  imports: [
    SequelizeModule.forFeature([Device, Sensor, SenosrsInDevice, Producer, DeviceProducer]),
    TypeModule,
    ProducerModule,
    ManufacturingTechnologyModule,
    PurposeModule,
    ControlTypeModule,
    OperationPrincipleModule,
    MeasureShowTypeModule,
    forwardRef(() => SensorsModule),
    forwardRef(() => AuthModule),
  ],
  exports: [DevicesService],
})
export class DevicesModule {}
