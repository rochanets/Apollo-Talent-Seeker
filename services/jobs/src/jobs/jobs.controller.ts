import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './entities/job.entity';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() dto: CreateJobDto): Job {
    return this.jobsService.create(dto);
  }

  @Get()
  findAll(): Job[] {
    return this.jobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Job {
    return this.jobsService.findOne(id);
  }
}
