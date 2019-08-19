import { Input } from '@angular/core';
import { Family } from './family.model';
import { Product } from './product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Cart } from './cart.model';

export class BaseProductComponent {
    cart: Cart;
    @Input() family: Family;
    panelOpenState = false;
    products: Product[] = [];
    @Input() type: string;

    constructor(protected cartService: CartService, protected productService: ProductService) {}

    getAmount(product: Product, school?: boolean) {
        let amount: number;
        let familyValue = this.family.familySize;
        if (school) {
            familyValue = this.family.schoolChildren;
        }
        product.sizeAmount.forEach(mapping => {
            if (mapping.minSize <= familyValue && familyValue <= mapping.maxSize) {
            amount = mapping.amount;
            }});
        return amount;
    }

    getProductInCart(product: Product) {
        return this.cart.items.find(cartItem => cartItem.productId === product._id);
    }

    isProductInCart(product: Product) {
        return this.cart.items.some(cartItem => cartItem.productId === product._id);
    }

    closePanel() {
        this.panelOpenState = false;
    }
}
