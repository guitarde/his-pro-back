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
   MongooseModule.forRoot('mongodb+srv://guitarde:guitar1@cluster0.5sdd7.mongodb.net/his')
    //MongooseModule.forRoot(`mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.HOST}?retryWrites=true&w=majority`),

    // MongooseModule.forRoot(`mongodb://${process.env.HOST}/${process.env.DB}?retryWrites=false&w=majority`)
  ],
  controllers: [
    AppController],
  providers: [AppService],
})
export class AppModule { }
