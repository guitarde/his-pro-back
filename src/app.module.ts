import { AuthModule } from './app/auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app/person/user.module';
import { UserLoginModule } from './app/user-login/user-login.module';

@Module({
  imports: [
    UserLoginModule,
    AuthModule,
    ConfigModule.forRoot(),

    UserModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.USUARIO}:${process.env.PASS}${process.env.HOST}/${process.env.DB}?retryWrites=true&w=majority`)

  ],
  controllers: [
    AppController],
  providers: [AppService],
})
export class AppModule { }
