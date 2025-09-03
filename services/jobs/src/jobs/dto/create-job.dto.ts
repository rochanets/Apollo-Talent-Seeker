import { IsArray, IsEnum, IsInt, IsString, Min } from 'class-validator';

export enum JobMode {
  PRESENCIAL = 'presencial',
  REMOTO = 'remoto',
  HIBRIDO = 'híbrido',
}

export class CreateJobDto {
  @IsString()
  title: string;

  @IsEnum(JobMode)
  mode: JobMode;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsInt()
  @Min(0)
  minYearsExp: number;

  @IsArray()
  @IsString({ each: true })
  requiredSkills: string[];
}
