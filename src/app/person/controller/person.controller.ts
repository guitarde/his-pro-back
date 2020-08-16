import { Controller, Get, Post, Body, Param, Delete, Logger, Put, Res, HttpStatus, Req, UseGuards } from '@nestjs/common';

import { ApiResponse, ApiTags, ApiForbiddenResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { PersonService } from '../service/person.service';
import { Person } from '../model/person.model';
import { PersonDTO } from 'src/app/dto/personDTO';

@UseGuards(AuthGuard())
@ApiTags('Persons')
@Controller('Persons')
export class PersonController {

    constructor(private _personService: PersonService) { }

    @Get()
    getAllPersons(): Promise<Person | null> {
        Logger.log("Calling controller retrieve all Persons");

        return this._personService.getAllPersons().then();
        // await this._PersonService.getAllPersons().then(resp => {
        //     res.status(HttpStatus.ACCEPTED)
        //         .json({
        //             "ok": true,
        //             "type": "Persons",
        //             "total": resp.length,
        //             "Persons": resp
        //         });
        // });
    }


    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    @Get('/:id')
    getPersonById(@Param('id') id: string): Promise<Person | null> {

        Logger.log("Calling controller find Person by ID : " + id);

        return this._personService.getPersonById(id);
    }

    @Get('/criteria/:criteria')
    getPersonByCriteria(@Param('criteria') criteria: string): Promise<Person[] | null> {

        Logger.log("Calling controller find Person by criteria : " + criteria);

        return this._personService.getPersonByCriteria(criteria);
    }


    @ApiCreatedResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: Person,
    })
    @Post()
    async createPerson(@Body() person: PersonDTO): Promise<Person | null> {
        Logger.log("Calling controller create new Person from type : " 
        + ('patient' in PersonDTO ? 'Patient' : 'Professional'));

        return this._personService.createPerson(person).then();
    }

    @Put('/:id')
    updatePerson(
        @Param('id') id: string,
        @Body() person: PersonDTO): Promise<Person | null> {
        Logger.log("Calling controller update Person by ID : " + id);
        return this._personService.updatePerson(id, person).then();
    }

    @Delete('/:id')
    deletePerson(@Param('id') id: string): Promise<Person | null> {
        Logger.log("Calling controller delete Person by ID : " + id);

        return this._personService.deletePersonById(id);
    }

    @Delete('/doctors/del')
    deleteAllDoctors(): Promise<Person[] | null> {
        Logger.log('Calling controller delete all doctors');

        return this._personService.deleteAllDoctors();
    }

}