import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Sensor } from './sensors.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { DeleteSensorDto } from './dto/delete-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { DevicesService } from 'src/devices/devices.service';
import { ApplicationSphereService } from 'src/application-sphere/application-sphere.service';
import { EnvironmentService } from 'src/environment/environment.service';
import { LiteratureService } from 'src/literature/literature.service';
import { MeasurableValueService } from 'src/measurable-value/measurable-value.service';
import { TypeService } from 'src/type/type.service';
import { SignalConversationService } from 'src/signal-conversation/signal-conversation.service';
import { OutputSignalService } from 'src/output-signal/output-signal.service';
import { ManufacturingTechnologyService } from 'src/manufacturing-technology/manufacturing-technology.service';
import { ProducerService } from 'src/producer/producer.service';
import { OperationPrincipleService } from 'src/operation-principle/operation-principle.service';
import { SensitiveElementService } from 'src/sensitive-element/sensitive-element.service';
import { SensorTypeService } from 'src/sensor-type/sensor-type.service';

@Injectable()
export class SensorsService {
  constructor(
    @InjectModel(Sensor) private sensorRepository: typeof Sensor,
    @Inject(forwardRef(() => DevicesService)) private deviceService: DevicesService,
    private appSphereService: ApplicationSphereService,
    private environmentService: EnvironmentService,
    private literatureService: LiteratureService,
    private measurableValueService: MeasurableValueService,
    private typeService: SensorTypeService,
    private signalConversationService: SignalConversationService,
    private outputSignalService: OutputSignalService,
    private manufacturingTechnologyService: ManufacturingTechnologyService,
    private producerService: ProducerService,
    private operationPrincipleService: OperationPrincipleService,
    private sensitiveElementService: SensitiveElementService,
  ) {}

  async createSensor(dto: CreateSensorDto) {
    const sensor = await this.sensorRepository.create(dto);
    const device = await this.deviceService.getDeviceByValue(dto.device);
    const appSphere = await this.appSphereService.getApplicationSphereByValue(
      dto.application_sphere,
    );
    const environment = await this.environmentService.getEnvironmentByValue(dto.environment);
    const literature = await this.literatureService.getLiteratureByValue(dto.literature);
    const measurableValue = await this.measurableValueService.getMeasurableValueByValue(
      dto.measurable_value,
    );
    const type = await this.typeService.getSensorTypeByValue(dto.type);
    const signalConv = await this.signalConversationService.getSignalConvByValue(
      dto.signal_conversation,
    );
    const outputSignal = await this.outputSignalService.getOutputSignalByValue(dto.output_signal);
    const manufTech = await this.manufacturingTechnologyService.getManufacturingTechnologyByValue(
      dto.manufacturing_technology,
    );
    const producer = await this.producerService.getProducerByValue(dto.producer);
    const operationPrinciple = await this.operationPrincipleService.getOperationPrincipleByValue(
      dto.operation_principle,
    );
    const sensetiveElement = await this.sensitiveElementService.getSensetiveElementByValue(
      dto.sensitive_element,
    );

    if (device && sensor) {
      await sensor.$set('devices', [device.id]);
      sensor.devices = [device];
    }

    if (appSphere) {
      await sensor.$set('application_spheres', [appSphere.id]);
      sensor.application_spheres = [appSphere];
    }

    if (environment) {
      await sensor.$set('environments', [environment.id]);
      sensor.environments = [environment];
    }

    if (literature) {
      await sensor.$set('literatures', [literature.id]);
      sensor.literatures = [literature];
    }

    if (measurableValue) {
      await sensor.$set('measurable_values', [measurableValue.id]);
      sensor.measurable_values = [measurableValue];
    }

    if (type) {
      await sensor.$set('type', [type.id]);
      sensor.type = [type];
    }

    if (signalConv) {
      await sensor.$set('signal_conversations', [signalConv.id]);
      sensor.signal_conversations = [signalConv];
    }

    if (outputSignal) {
      await sensor.$set('output_signals', [outputSignal.id]);
      sensor.output_signals = [outputSignal];
    }

    if (manufTech) {
      await sensor.$set('manufacturing_technologys', [manufTech.id]);
      sensor.manufacturing_technologys = [manufTech];
    }

    if (producer) {
      await sensor.$set('producers', [producer.id]);
      sensor.producers = [producer];
    }

    if (operationPrinciple) {
      await sensor.$set('operation_principles', [operationPrinciple.id]);
      sensor.operation_principles = [operationPrinciple];
    }

    if (sensetiveElement) {
      await sensor.$set('sensitive_elements', [sensetiveElement.id]);
      sensor.sensitive_elements = [sensetiveElement];
    }

    return sensor;
  }

  async getAllSensors() {
    const sensors = await this.sensorRepository.findAll({
      include: { all: true },
    });

    return sensors;
  }

  // async updateSensor(dto: UpdateSensorDto) {
  //   const sensor = await this.sensorRepository.update(dto, {
  //     where: { id: dto.id },
  //   });

  //   if (!sensor[0]) {
  //     throw new HttpException('Датчик не найден', HttpStatus.NOT_FOUND);
  //   }

  //   return dto;
  // }

  async deleteSensor(dto: DeleteSensorDto) {
    console.log(dto);
    const sensor = await this.sensorRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!sensor) {
      throw new HttpException('Датчик не найден', HttpStatus.NOT_FOUND);
    }

    console.log(sensor);

    return dto.id;
  }

  async getSensorByValue(value: string) {
    const sensor = await this.sensorRepository.findOne({ where: { name: value } });

    return sensor;
  }
}
