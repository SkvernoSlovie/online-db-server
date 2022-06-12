import { Test, TestingModule } from '@nestjs/testing';
import { DevicePurposeController } from './device-purpose.controller';

describe('DevicePurposeController', () => {
  let controller: DevicePurposeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevicePurposeController],
    }).compile();

    controller = module.get<DevicePurposeController>(DevicePurposeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
