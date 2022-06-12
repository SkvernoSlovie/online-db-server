import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Device } from './device.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDeviceDto } from './dto/create-device.dto';
import { DeleteDeviceDto } from './dto/delete-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { SensorsService } from 'src/sensors/sensors.service';
import { TypeService } from 'src/type/type.service';
import { ProducerService } from 'src/producer/producer.service';
import { ManufacturingTechnologyService } from 'src/manufacturing-technology/manufacturing-technology.service';
import { PurposeService } from 'src/purpose/purpose.service';
import { ControlTypeService } from 'src/control-type/control-type.service';
import { OperationPrincipleService } from 'src/operation-principle/operation-principle.service';
import { MeasureShowTypeService } from 'src/measure-show-type/measure-show-type.service';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(Device) private deviceRepository: typeof Device,
    @Inject(forwardRef(() => SensorsService)) private sensorService: SensorsService,
    private typeService: TypeService,
    private producerService: ProducerService,
    private manufacturingTechnologyService: ManufacturingTechnologyService,
    private purposeService: PurposeService,
    private controlTypeService: ControlTypeService,
    private operationPrincipleService: OperationPrincipleService,
    private masurableShowType: MeasureShowTypeService,
  ) {}

  async createDevice(dto: CreateDeviceDto) {
    const device = await this.deviceRepository.create(dto);
    const sensor = await this.sensorService.getSensorByValue(dto.sensor);
    const type = await this.typeService.getTypeByValue(dto.type);
    const manufTech = await this.manufacturingTechnologyService.getManufacturingTechnologyByValue(
      dto.manufacturing_technology,
    );
    const producer = await this.producerService.getProducerByValue(dto.producer);
    const operationPrinciple = await this.operationPrincipleService.getOperationPrincipleByValue(
      dto.operation_principle,
    );
    const purpose = await this.purposeService.getPurposeByValue(dto.purpose);
    const controlType = await this.controlTypeService.getControlTypeByValue(dto.control_type);
    const showType = await this.masurableShowType.getShowTypeByValue(dto.measurable_show_type);

    if (sensor) {
      await device.$set('sensors', [sensor.id]);
      device.sensors = [sensor];
    }

    if (type) {
      await device.$set('type', [type.id]);
      device.type = [type];
    }

    if (manufTech) {
      await device.$set('manufacturing_technologys', [manufTech.id]);
      device.manufacturing_technologys = [manufTech];
    }

    if (producer) {
      await device.$set('producers', [producer.id]);
      device.producers = [producer];
    }

    if (operationPrinciple) {
      await device.$set('operation_principles', [operationPrinciple.id]);
      device.operation_principles = [operationPrinciple];
    }

    if (purpose) {
      await device.$set('purpose', [purpose.id]);
      device.purpose = [purpose];
    }

    if (controlType) {
      await device.$set('control_type', [controlType.id]);
      device.control_type = [controlType];
    }

    if (showType) {
      await device.$set('measurable_show_type', [showType.id]);
      device.measurable_show_type = [showType];
    }

    return device;
  }

  async getAllDevices() {
    const devices = await this.deviceRepository.findAll({
      include: { all: true },
    });

    return devices;
  }

  // async updateDevice(dto: UpdateDeviceDto) {
  //   const device = await this.deviceRepository.update(dto, {
  //     where: { id: dto.id },
  //   });

  //   if (!device[0]) {
  //     throw new HttpException('Прибор не найден', HttpStatus.NOT_FOUND);
  //   }

  //   return dto;
  // }

  async deleteDevice(dto: DeleteDeviceDto) {
    const device = await this.deviceRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!device) {
      throw new HttpException('Прибор не найден', HttpStatus.NOT_FOUND);
    }

    return dto.id;
  }

  async getDeviceByValue(value: string) {
    const device = await this.deviceRepository.findOne({ where: { name: value } });

    return device;
  }
}
