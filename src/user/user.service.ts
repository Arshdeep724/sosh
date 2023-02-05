import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  
  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({data: createUserDto});
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  findByEmailId(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    })
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: {
        id: id,
      },
      data: updateUserDto
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
