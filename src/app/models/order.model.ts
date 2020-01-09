import { Family } from './family.model';
import { CartItemsByType } from './cart-items-by-type.model';

export class Order {
    family: Family;
    cart: CartItemsByType[];
    pickUpDate: string;
    received: boolean;
}
