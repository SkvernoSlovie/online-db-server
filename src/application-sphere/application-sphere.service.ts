import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ApplicationSphere } from './application-sphere.model';
import { CreateApplicationSphereDto } from './dto/create-application-sphere.dto';
import { DeleteApplicationSphereDto } from './dto/delete-application-sphere.dto';

@Injectable()
export class ApplicationSphereService {
  constructor(
    @InjectModel(ApplicationSphere)
    private applicationSphereRepository: typeof ApplicationSphere,
  ) {}

  async createApplicationSphere(dto: CreateApplicationSphereDto) {
    const applicationSphere = await this.applicationSphereRepository.create(dto);

    return applicationSphere;
  }

  async getAllApplicationSphere() {
    const applicationSpheres = await this.applicationSphereRepository.findAll({
      include: { all: true },
    });
    return applicationSpheres;
  }

  async deleteApplicationSphere(dto: DeleteApplicationSphereDto) {
    const isDeleted = await this.applicationSphereRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Сфера применения не найдена', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }

  async getApplicationSphereByValue(value: string) {
    const appSphere = await this.applicationSphereRepository.findOne({ where: { name: value } });
    return appSphere;
  }
}
