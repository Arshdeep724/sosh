import { User as UserModel } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class User implements UserModel {
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  token: string;
}
