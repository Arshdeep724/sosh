import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SecurityCheck implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['x-secret-key'] === process.env.SECRET_KEY) {
      res.status(401).send({
        error: 'Unauthorized! User Not Logged In',
      });
    } else {
      next();
    }
  }
}