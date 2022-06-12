import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/posts.model';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SensorsModule } from './sensors/sensors.module';
import { Sensor } from './sensors/sensors.model';
import { DevicesModule } from './devices/devices.module';
import { ApplicationSphereModule } from './application-sphere/application-sphere.module';
import { LiteratureModule } from './literature/literature.module';
import { ManufacturingTechnologyModule } from './manufacturing-technology/manufacturing-technology.module';
import { MeasurableValueModule } from './measurable-value/measurable-value.module';
import { OperationPrincipleModule } from './operation-principle/operation-principle.module';
import { OutputSignalModule } from './output-signal/output-signal.module';
import { ProducerModule } from './producer/producer.module';
import { SensitiveElementModule } from './sensitive-element/sensitive-element.module';
import { SignalConversationModule } from './signal-conversation/signal-conversation.module';
import { EnvironmentModule } from './environment/environment.module';
import { ControlTypeModule } from './control-type/control-type.module';
import { DeviceMeasureShowTypeModule } from './device-measure-show-type/device-measure-show-type.module';
import { DevicePurposeModule } from './device-purpose/device-purpose.module';
import { DeviceTypeModule } from './device-type/device-type.module';
import { SensorTypeModule } from './sensor-type/sensor-type.module';
import * as path from 'path';
import { Device } from './devices/device.model';
import { SenosrsInDevice } from './devices/sensors-in-device.model';
import { SensorApplicationSphere } from './application-sphere/sensors-application-sphere.model';
import { DeviceApplicationSphere } from './application-sphere/devices-applecation-sphere.model';
import { ApplicationSphere } from './application-sphere/application-sphere.model';
import { DeviceControlType } from './control-type/device-control-type.model';
import { ControlType } from './control-type/control-type.model';
import { DeviceEnvironment } from './environment/devices-environment.model';
import { Environment } from './environment/environment.model';
import { DeviceLiterature } from './literature/devices-literature.model';
import { Literature } from './literature/literature.model';
import { DeviceMeasurableValue } from './measurable-value/devices-measurable-value.model';
import { MeasurableValue } from './measurable-value/measurable-value.model';
import { SensorEnvironment } from './environment/sensors-environment.model';
import { SensorLiterature } from './literature/sensors-literature.model';
import { TypeModule } from './type/type.module';
import { SensorMeasurableValue } from './measurable-value/sensor-measurable-value.model';
import { SensorSensorType } from './sensor-type/sensor-sensor-type.model';
import { Type } from './type/type.model';
import { DeviceType } from './type/device-type.model';
import { PurposeModule } from './purpose/purpose.module';
import { Purpose } from './purpose/purpose.model';
import { DevicePurpose } from './purpose/device-purpose.model';
import { OperationPrinciple } from './operation-principle/operation-principle.model';
import { DeviceOperationPrinciple } from './operation-principle/device-operation-principle.model';
import { SignalConversation } from './signal-conversation/signal-conversation.model';
import { SensorSignalConversation } from './signal-conversation/sensor-signal-conversation.model';
import { OutputSignal } from './output-signal/output-signal.model';
import { SensorOutputSignal } from './output-signal/sensor-output-signal.model';
import { Producer } from './producer/producer.model';
import { SensorProducer } from './producer/sensor-producer.model';
import { SensorOperationPrinciple } from './operation-principle/sensor-operation-principle.model';
import { SensetiveElement } from './sensitive-element/sensetive-element.model';
import { SensorSensetiveElement } from './sensitive-element/sensor-sensetive-elemnt.model';
import { ManufacturingTechnology } from './manufacturing-technology/manufacturing-technology.model';
import { SensorManufacturingTechnology } from './manufacturing-technology/sensor-manufacturing-technology.model';
import { DeviceProducer } from './producer/device-producer.model';
import { DeviceManufacturingTechnology } from './manufacturing-technology/device-manufacturing-technology.model';
import { MeasureShowTypeModule } from './measure-show-type/measure-show-type.module';
import { MeasurableShowType } from './measure-show-type/measure-show-type.model';
import { DeviceMeasurableShowType } from './measure-show-type/device-measurable-show-type.model';
import { SensorType } from './sensor-type/sensor-type.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username:  process.env.POSTGRES_USER,
      password:  process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Role,
        UserRoles,
        Post,
        Sensor,
        SenosrsInDevice,
        Device,
        SensorApplicationSphere,
        DeviceApplicationSphere,
        DeviceControlType,
        ControlType,
        DeviceEnvironment,
        Environment,
        ApplicationSphere,
        DeviceLiterature,
        Literature,
        DeviceMeasurableValue,
        MeasurableValue,
        SensorEnvironment,
        SensorLiterature,
        SensorMeasurableValue,
        SensorSensorType,
        SensorType,
        Type,
        DeviceType,
        Purpose,
        DevicePurpose,
        OperationPrinciple,
        DeviceOperationPrinciple,
        SensorOperationPrinciple,
        SignalConversation,
        SensorSignalConversation,
        OutputSignal,
        SensorOutputSignal,
        Producer,
        DeviceProducer,
        SensorProducer,
        SensetiveElement,
        SensorSensetiveElement,
        ManufacturingTechnology,
        SensorManufacturingTechnology,
        DeviceManufacturingTechnology,
        MeasurableShowType,
        DeviceMeasurableShowType,
      ],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule,
    SensorsModule,
    DevicesModule,
    ApplicationSphereModule,
    LiteratureModule,
    ManufacturingTechnologyModule,
    MeasurableValueModule,
    OperationPrincipleModule,
    OutputSignalModule,
    ProducerModule,
    SensitiveElementModule,
    SignalConversationModule,
    EnvironmentModule,
    ControlTypeModule,
    DeviceMeasureShowTypeModule,
    DevicePurposeModule,
    DeviceTypeModule,
    SensorTypeModule,
    TypeModule,
    PurposeModule,
    MeasureShowTypeModule,
  ],
})
export class AppModule {}
