import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { SecurityCheck } from './auth/logged-check.middleware';

@Module({
  imports: [UserModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SecurityCheck).exclude({path: 'user/login',method: RequestMethod.ALL}).forRoutes({ path: '*',method: RequestMethod.ALL});
  }
}
