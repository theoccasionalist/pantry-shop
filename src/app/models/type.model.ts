import { Product } from './product.model';

export class Type {
    // tslint:disable-next-line:variable-name
    _id: string;
    typeName: string;
    typeSizeAmount?: {
        minFamSize: number;
        maxFamSize: number;
        maxAmount: number;
    } [];
    products: Product[];
    superTypeId?: string;
}
