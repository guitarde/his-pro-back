
type InsurerType = '' | 'HEALTH' | 'FAMILY' | 'DENTAL';

export class InsurerDTO {
    insurerName: string;
    insurerType: InsurerType;
    cardNumber: string;

    constructor(insurerName:string, insurerType:InsurerType, cardNumber: string){
        this.insurerName = insurerName;
        this.insurerType = insurerType;
        this.cardNumber = cardNumber;
    }
}
