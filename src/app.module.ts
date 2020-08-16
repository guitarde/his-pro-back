import { AuthModule } from './app/auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app/person/person.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserLoginModule } from './app/user-login/user-login.module';

@Module({
  imports: [
    UserLoginModule,
    AuthModule,
    ConfigModule.forRoot(),

    UserModule,
    TypegooseModule.forRoot(`mongodb+srv://guitarde:guitar1@cluster0.rvcck.mongodb.net/his`, {
      useNewUrlParser: true}),
    MongooseModule.forRoot(`mongodb+srv://guitarde:guitar1@cluster0.rvcck.mongodb.net/his?retryWrites=true&w=majority`)

  ],
  controllers: [
    AppController],
  providers: [AppService],
})
export class AppModule { }
