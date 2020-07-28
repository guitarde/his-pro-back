
type InsurerType = '' | 'HEALTH' | 'FAMILY' | 'DENTAL';

export interface InsurerDTO {
    insurerName: string;
    insurerType: InsurerType;
    cardNumber: string;
}