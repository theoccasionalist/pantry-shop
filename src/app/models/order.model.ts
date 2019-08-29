import { Family } from './family.model';
import { Cart } from './cart.model';

export class Order {
    family: Family;
    cart: Cart;
    pickUpDate: string;
}
