export class Product {
    // tslint:disable-next-line:variable-name
    _id: string;
    type: string;
    name: string;
    famSizeAmount: [{
        minFamSize: number;
        maxFamSize: number;
        maxAmount: number;
    }];
    points?: number;
    school?: boolean;
    meat?: boolean;
}
