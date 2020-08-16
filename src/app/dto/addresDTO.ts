import { ApiProperty } from "@nestjs/swagger";

export class AddressDTO {
  
  @ApiProperty({description: 'Name of the street'})
  street?: string;
  number?: string;
  door?: string;
  zip?: string;
  city?: string;

  constructor( street:string, number: string, door:string,zip:string,city:string ) {
    this.street= street;
    this.number= number;
    this.door= door;
    this.zip= zip;
    this.city= city;
  }
}