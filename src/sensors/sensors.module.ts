import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';
import { SensorsController } from './sensors.controller';
import { SensorsService } from './sensors.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sensor } from './sensors.model';
import { Device } from 'src/devices/device.model';
import { SenosrsInDevice } from 'src/devices/sensors-in-device.model';
import { SensorApplicationSphere } from 'src/application-sphere/sensors-application-sphere.model';
import { SensorEnvironment } from 'src/environment/sensors-environment.model';
import { Environment } from 'src/environment/environment.model';
import { ApplicationSphere } from 'src/application-sphere/application-sphere.model';
import { Producer } from 'src/producer/producer.model';
import { SensorProducer } from 'src/producer/sensor-producer.model';
import { Literature } from 'src/literature/literature.model';
import { SensorLiterature } from 'src/literature/sensors-literature.model';
import { MeasurableValue } from 'src/measurable-value/measurable-value.model';
import { SensorMeasurableValue } from 'src/measurable-value/sensor-measurable-value.model';
import { SensorType } from 'src/sensor-type/sensor-type.model';
import { SensorSensorType } from 'src/sensor-type/sensor-sensor-type.model';
import { SignalConversation } from 'src/signal-conversation/signal-conversation.model';
import { SensorSignalConversation } from 'src/signal-conversation/sensor-signal-conversation.model';
import { OutputSignal } from 'src/output-signal/output-signal.model';
import { SensorOutputSignal } from 'src/output-signal/sensor-output-signal.model';
import { ManufacturingTechnology } from 'src/manufacturing-technology/manufacturing-technology.model';
import { SensorManufacturingTechnology } from 'src/manufacturing-technology/sensor-manufacturing-technology.model';
import { OperationPrinciple } from 'src/operation-principle/operation-principle.model';
import { SensorOperationPrinciple } from 'src/operation-principle/sensor-operation-principle.model';
import { SensetiveElement } from 'src/sensitive-element/sensetive-element.model';
import { SensorSensetiveElement } from 'src/sensitive-element/sensor-sensetive-elemnt.model';
import { DevicesModule } from 'src/devices/devices.module';
import { ApplicationSphereModule } from 'src/application-sphere/application-sphere.module';
import { EnvironmentModule } from 'src/environment/environment.module';
import { LiteratureModule } from 'src/literature/literature.module';
import { MeasurableValueModule } from 'src/measurable-value/measurable-value.module';
import { SignalConversationModule } from 'src/signal-conversation/signal-conversation.module';
import { OutputSignalModule } from 'src/output-signal/output-signal.module';
import { ManufacturingTechnologyModule } from 'src/manufacturing-technology/manufacturing-technology.module';
import { ProducerModule } from 'src/producer/producer.module';
import { OperationPrincipleModule } from 'src/operation-principle/operation-principle.module';
import { SensitiveElementModule } from 'src/sensitive-element/sensitive-element.module';
import { SensorTypeModule } from 'src/sensor-type/sensor-type.module';
@Module({
  controllers: [SensorsController],
  providers: [SensorsService],
  imports: [
    SequelizeModule.forFeature([
      Sensor,
      Device,
      SenosrsInDevice,
      ApplicationSphere,
      SensorApplicationSphere,
      Environment,
      SensorEnvironment,
      Literature,
      SensorLiterature,
      MeasurableValue,
      SensorMeasurableValue,
      SensorType,
      SensorSensorType,
      SignalConversation,
      SensorSignalConversation,
      OutputSignal,
      SensorOutputSignal,
      ManufacturingTechnology,
      SensorManufacturingTechnology,
      Producer,
      SensorProducer,
      OperationPrinciple,
      SensorOperationPrinciple,
      SensetiveElement,
      SensorSensetiveElement,
    ]),
    RolesModule,
    ApplicationSphereModule,
    EnvironmentModule,
    LiteratureModule,
    MeasurableValueModule,
    SensorTypeModule,
    SignalConversationModule,
    OutputSignalModule,
    ManufacturingTechnologyModule,
    ProducerModule,
    OperationPrincipleModule,
    SensitiveElementModule,
    forwardRef(() => DevicesModule),
    forwardRef(() => AuthModule),
  ],
  exports: [SensorsService],
})
export class SensorsModule {}
