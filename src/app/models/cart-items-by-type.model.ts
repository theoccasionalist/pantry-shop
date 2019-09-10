export class CartItemsByType {
    typeId: string;
    typeName: string;
    items: {
        productId: string;
        productName: string;
        amount: number;
    }[];
}
