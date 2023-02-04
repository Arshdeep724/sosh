import { OmitType } from '@nestjs/mapped-types';
import { Blog } from '../entities/blog.entity';

export class CreateBlogDto extends OmitType(Blog, ['id']) {}
