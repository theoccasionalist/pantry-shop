export class CartItemsByType {
    // tslint:disable-next-line:variable-name
    typeId: string;
    typeName: string;
    products: {
        productId: string;
        productName: string;
        amount: number;
    }[];
}
