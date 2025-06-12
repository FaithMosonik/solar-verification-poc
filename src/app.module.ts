import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolarDetectionModule } from './solar-detection/solar-detection.module';
import { ImageProcessingService } from './image-processing/image-processing.service';
import { SatelliteImageryService } from './satellite-imagery/satellite-imagery.service';

@Module({
  imports: [SolarDetectionModule],
  controllers: [AppController],
  providers: [AppService, ImageProcessingService, SatelliteImageryService],
})
export class AppModule {}
