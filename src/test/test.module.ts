import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
