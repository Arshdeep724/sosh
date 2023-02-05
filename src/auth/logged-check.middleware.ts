import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from './../user/user.service';
import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDto } from './../user/dto/create-user.dto';

@Injectable()
export class SecurityCheck implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    if(req.headers['x-secret-token'] === undefined || req.headers['x-user-email'] === undefined) {
      return res.status(400).send("Token undefined");
    }
    const prismaService = new PrismaService();
    const userService = new UserService(prismaService);
    const user: CreateUserDto = await userService.findByEmailId(String(req.headers['x-user-email']));
    
    if (user.token !== req.headers['x-secret-token']) {
      res.status(401).send({
        error: 'Unauthorized! User Not Logged In',
      });
    } else {
      next();
    }
  }
}