import { Product } from './product.model';

export class Type {
    typeId: string;
    typeName: string;
    typeSizeAmount?: [{
        minFamSize: number;
        maxFamSize: number;
        maxAmount: number;
    }];
    products: Product[];
    superTypeId: string;
    unit?: string;
}
