import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskModule } from './task/task.module';
import { GraphQLModule } from '@nestjs/graphql'
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ExceptionFilter } from './common/filter/exception.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    TaskModule, 
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ]
})
export class AppModule {}
