import { Module } from '@nestjs/common';
import { PersonService } from './service/person.service';
import { PersonController } from './controller/person.controller';
import { PassportModule } from '@nestjs/passport';
import { TypegooseModule } from "nestjs-typegoose";
import { Person } from './model/person.model';


@Module({
    imports: [
      TypegooseModule.forFeature([Person]),

      PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    ],
    controllers: [PersonController],
    providers: [PersonService],
})
export class UserModule { }
