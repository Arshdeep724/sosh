import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let id: '';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)',async () => {
    const res = await request(app.getHttpServer())
    .post('/blog')
    .set('x-secret-token','916ecec5449f6df00e07699370a7232e12d48120b066a3011bf5113c7077928e')
    .set('x-user-email','raman')
    .send({
      "title": "nice blog",
      "description": "its a very good blog",
      "createdBy": 'raman',
      "createdOn": "2023-02-05T18:58:57.879Z"
    })
    .expect(201);
    id = res.body.id;
  });

  it('/ (PUT)',() => {
    return request(app.getHttpServer())
    .put(`/blog/${id}`)
    .set('x-secret-token','916ecec5449f6df00e07699370a7232e12d48120b066a3011bf5113c7077928e')
    .set('x-user-email','raman')
    .send({
      "title": "bad vlog",
    })
    .expect(200)
    .expect({
      "id": `${id}`,
      "title": "bad vlog",
      "description": "its a very good blog",
      "createdBy": "raman",
      "createdOn": "2023-02-05T18:58:57.879Z"
    });
  });

  it('/ (DELETE)',() => {
    return request(app.getHttpServer())
    .delete(`/blog/${id}`)
    .set('x-secret-token','7907560c198f82783819ebd71847da80eb0b0d1063f34818e92a990cf7d81dbd')
    .set('x-user-email','chutmarika')
    .expect(200)
    .expect({
      "id": `${id}`,
      "title": "bad vlog",
      "description": "its a very good blog",
      "createdBy": "raman",
      "createdOn": "2023-02-05T18:58:57.879Z"
    });
  });

});
