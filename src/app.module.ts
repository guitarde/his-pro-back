import { AuthModule } from './app/auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app/person/person.module';
import { UserLoginModule } from './app/user-login/user-login.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    UserLoginModule,
    AuthModule,
    ConfigModule.forRoot(),

    UserModule,
    TypegooseModule.forRoot(`mongodb+srv://${process.env.USUARIO}:${process.env.PASS}${process.env.HOST}/${process.env.DB}`, {
      useNewUrlParser: true}),
  // MongooseModule.forRoot(`mongodb+srv://${process.env.USUARIO}:${process.env.PASS}${process.env.HOST}/${process.env.DB}?retryWrites=true&w=majority`)

  ],
  controllers: [
    AppController],
  providers: [AppService],
})
export class AppModule { }
