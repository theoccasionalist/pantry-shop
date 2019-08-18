export class Product {
    // tslint:disable-next-line:variable-name
    _id: string;
    multiple: boolean;
    type: string;
    name: string;
    sizeAmount?: [{
        minSize: number;
        maxSize: number;
        amount: number;
        subUnit?: string;
    }];
    points?: number;
    unit?: string;
    special?: string;
}
