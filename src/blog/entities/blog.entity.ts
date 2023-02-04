import { Blog as BlogModel } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

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

  @IsNotEmpty()
  @IsString()
  createdOn: string;
}
