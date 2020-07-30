import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app/person/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    UserModule,
    //MongooseModule.forRoot('mongodb+srv://guitarde:<password>@cluster0.5sdd7.mongodb.net/his')],
    //MongooseModule.forRoot(`mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.HOST}?retryWrites=true&w=majority`),

    MongooseModule.forRoot(`mongodb://${process.env.HOST}?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
