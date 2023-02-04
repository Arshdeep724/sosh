import { Blog as BlogModel } from '@prisma/client';
import { IsNotEmpty, IsString, IsDate, IsDateString } from 'class-validator';

export class Blog implements BlogModel {
  id: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  createdBy: string;

  @IsDateString()
  @IsString()
  createdOn: Date;
}
