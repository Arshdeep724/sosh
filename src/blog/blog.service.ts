import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(private readonly prismaService:PrismaService){}

  create(createBlogDto: CreateBlogDto) {
    return this.prismaService.blog.create({data:createBlogDto});
  }

  findAll() {
    return this.prismaService.blog.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  update(id: string, updateBlogDto: UpdateBlogDto) {
    return this.prismaService.blog.update({
      where: {
        id: id,
      },
      data: updateBlogDto
    });
  }

  remove(id: string) {
    return this.prismaService.blog.delete({
      where: {
        id: id,
      }
    });
  }
}
