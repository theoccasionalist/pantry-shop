import { Type } from './type.model';

export class Product {
    productId: string;
    productName: string;
    prodSizeAmount?: [{
        minFamSize: number;
        maxFamSize: number;
        maxAmount: number;
    }];
    type?: Type;
    points?: number;
    school?: boolean;
    infant?: boolean;
}
