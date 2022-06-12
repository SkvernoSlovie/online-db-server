import { Test, TestingModule } from '@nestjs/testing';
import { DeviceMeasureShowTypeController } from './device-measure-show-type.controller';

describe('DeviceMeasureShowTypeController', () => {
  let controller: DeviceMeasureShowTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviceMeasureShowTypeController],
    }).compile();

    controller = module.get<DeviceMeasureShowTypeController>(DeviceMeasureShowTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
