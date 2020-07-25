import { UserModule } from './app/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule, 
    // MongooseModule.forRoot('mongodb+srv://guitarde:<password>@cluster0.5sdd7.mongodb.net/his')],
    MongooseModule.forRoot('mongodb://localhost:27017/his')],
    controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
