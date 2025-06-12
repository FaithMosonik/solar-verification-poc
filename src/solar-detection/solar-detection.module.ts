import { Module } from '@nestjs/common';
import { SolarDetectionController } from './solar-detection.controller';
import { SolarDetectionService } from './solar-detection.service';

@Module({
  controllers: [SolarDetectionController],
  providers: [SolarDetectionService]
})
export class SolarDetectionModule {}
