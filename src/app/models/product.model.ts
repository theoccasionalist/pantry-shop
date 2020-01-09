import { Type } from './type.model';

export class Product {
    // tslint:disable-next-line:variable-name
    _id: string;
    productName: string;
    prodSizeAmount?: {
        minFamSize: number;
        maxFamSize: number;
        maxAmount: number;
    } [];
    points?: number;
    school?: boolean;
    infant?: boolean;
}
