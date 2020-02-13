import { Product } from './product.model';

export class TypeProduct extends Product {
    typeId?: string;
    typename?: string;
    typeSizeAmount?: {
        minFamSize: number;
        maxFamSize: number;
        maxAmount: number;
    } [];
}
