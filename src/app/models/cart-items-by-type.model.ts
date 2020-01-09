export class CartItemsByType {
    // tslint:disable-next-line:variable-name
    _id: string;
    typeName: string;
    items: {
        _id: string;
        productName: string;
        amount: number;
    }[];
}
