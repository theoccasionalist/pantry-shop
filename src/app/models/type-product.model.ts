import { Product } from './product.model';

export class TypeProduct extends Product {
    typeId?: string;
    typeName?: string;
    typeComment?: string;
    typeLimits?: {
        enableTypeTracking: boolean;
        typeSizeAmount: {
            minFamSize: number;
            maxFamSize: number;
            maxAmount: number;
        } []
    };
}
