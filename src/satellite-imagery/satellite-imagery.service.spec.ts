import { Test, TestingModule } from '@nestjs/testing';
import { SatelliteImageryService } from './satellite-imagery.service';

describe('SatelliteImageryService', () => {
  let service: SatelliteImageryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SatelliteImageryService],
    }).compile();

    service = module.get<SatelliteImageryService>(SatelliteImageryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
