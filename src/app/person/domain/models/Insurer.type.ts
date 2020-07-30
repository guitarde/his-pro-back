
type InsurerType = '' | 'HEALTH' | 'FAMILY' | 'DENTAL';

export interface Insurer {
    insurerName: string;
    insurerType: InsurerType;
    cardNumber: string;
}