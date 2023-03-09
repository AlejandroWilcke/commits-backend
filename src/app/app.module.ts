import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GithubController } from 'src/models/github/github.controller';
import { AppService } from './app.service';
import { GithubService } from 'src/models/github/github.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`,
    isGlobal: true, 
  })],
  controllers: [AppController, GithubController],
  providers: [AppService, GithubService],
})

export class AppModule {}
