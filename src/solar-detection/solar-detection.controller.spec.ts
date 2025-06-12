import { Test, TestingModule } from '@nestjs/testing';
import { SolarDetectionController } from './solar-detection.controller';

describe('SolarDetectionController', () => {
  let controller: SolarDetectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolarDetectionController],
    }).compile();

    controller = module.get<SolarDetectionController>(SolarDetectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
