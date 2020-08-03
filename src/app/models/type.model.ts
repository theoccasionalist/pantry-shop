import { Product } from './product.model';

export class Type {
    // tslint:disable-next-line:variable-name
    _id: string;
    typeName: string;
    products: Product[];
    typeComment?: string;
    typeLimits?: {
        enableTypeTracking: boolean;
        typeSizeAmount: {
            minFamSize: number;
            maxFamSize: number;
            maxAmount: number;
        } []
    };
    superTypeId?: string;
}
