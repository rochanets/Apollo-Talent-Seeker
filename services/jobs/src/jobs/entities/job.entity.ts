import { JobMode } from '../dto/create-job.dto';

export class Job {
  id: string;
  title: string;
  mode: JobMode;
  city: string;
  state: string;
  country: string;
  minYearsExp: number;
  requiredSkills: string[];
}
