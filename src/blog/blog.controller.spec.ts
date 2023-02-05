import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { PrismaService } from './../prisma/prisma.service';
import { INestApplication } from '@nestjs/common';
import { SecurityCheck } from './../auth/logged-check.middleware';

describe('BlogController', () => {
  let blogController: BlogController;
  let app: INestApplication;

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      controllers: [BlogController],
      providers: [BlogService, PrismaService],
    }).compile();
    blogController = testingModule.get<BlogController>(BlogController);
    app = testingModule.createNestApplication();
    // const middleware = new SecurityCheck();
    // app.use(await middleware.use.bind(middleware));
    await app.init();
  });

  describe('GET /blog', () => {
    it('should return an array of blogs', () => {
      return request(app.getHttpServer())
        .get('/blog')
        .send({ email: 'test@example.com', token: 'some-token' })
        .expect(200)
        .expect(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
  });
});
