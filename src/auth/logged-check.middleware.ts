import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class SecurityCheck implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    if(req.body.token === undefined || req.body.email === undefined) {
      return res.status(400).send("Token undefined");
    }
    const prismaService = new PrismaService();
    const userService = new UserService(prismaService);
    const user: CreateUserDto = await userService.findByEmailId(req.body.email);
    
    if (user.token !== req.body.token) {
      res.status(401).send({
        error: 'Unauthorized! User Not Logged In',
      });
    } else {
      next();
    }
  }
}