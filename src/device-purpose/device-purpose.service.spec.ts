import { Test, TestingModule } from '@nestjs/testing';
import { DevicePurposeService } from './device-purpose.service';

describe('DevicePurposeService', () => {
  let service: DevicePurposeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevicePurposeService],
    }).compile();

    service = module.get<DevicePurposeService>(DevicePurposeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
