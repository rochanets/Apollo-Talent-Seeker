import { Module } from '@nestjs/common';
import { JobsService } from './jobs/jobs.service';
import { JobsController } from './jobs/jobs.controller';

@Module({
  controllers: [JobsController],
  providers: [JobsService],
})
export class AppModule {}
