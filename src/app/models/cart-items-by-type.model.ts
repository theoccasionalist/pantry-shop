export class CartItemsByType {
    // tslint:disable-next-line:variable-name
    typeId: string;
    typeName: string;
    typeAmountReceived?: number;
    products: {
        productId: string;
        productName: string;
        amount: number;
    }[];
}
