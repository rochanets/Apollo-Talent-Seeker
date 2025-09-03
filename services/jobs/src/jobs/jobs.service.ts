import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Job } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  private jobs: Job[] = [];

  create(dto: CreateJobDto): Job {
    const job: Job = { id: uuid(), ...dto };
    this.jobs.push(job);
    return job;
  }

  findAll(): Job[] {
    return this.jobs;
  }

  findOne(id: string): Job {
    const job = this.jobs.find((j) => j.id === id);
    if (!job) {
      throw new NotFoundException('Job not found');
    }
    return job;
  }
}
