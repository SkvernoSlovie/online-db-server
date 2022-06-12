import { Test, TestingModule } from '@nestjs/testing';
import { DeviceMeasureShowTypeService } from './device-measure-show-type.service';

describe('DeviceMeasureShowTypeService', () => {
  let service: DeviceMeasureShowTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeviceMeasureShowTypeService],
    }).compile();

    service = module.get<DeviceMeasureShowTypeService>(DeviceMeasureShowTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
