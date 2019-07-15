import { Family } from './family.model';
import { CartCategoryItems } from './cart-category-items.model';

export class Order {
    family: Family;
    cart: CartCategoryItems[];
    pickUpDate: string;
}
