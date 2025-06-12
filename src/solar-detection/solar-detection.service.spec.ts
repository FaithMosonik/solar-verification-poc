import { Test, TestingModule } from '@nestjs/testing';
import { SolarDetectionService } from './solar-detection.service';

describe('SolarDetectionService', () => {
  let service: SolarDetectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolarDetectionService],
    }).compile();

    service = module.get<SolarDetectionService>(SolarDetectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
