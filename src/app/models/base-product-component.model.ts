import { Input } from '@angular/core';
import { Family } from './family.model';
import { Product } from './product.model';
import { CartService } from '../services/cart.service';
import { Cart } from './cart.model';

export class BaseProductComponent {
    cart: Cart;
    @Input() family: Family;
    inFamilySize = false;
    inCart: boolean;
    maxAmount: number;
    @Input() product: Product;

    constructor(protected cartService: CartService) {}

    addProductToCart() {
        this.cart.items.push({
            productId: this.product._id, type: this.product.type, name: this.product.name, amount: 1
        });
    }

    getProductInCart() {
        return this.cart.items.find(cartItem => cartItem.productId === this.product._id);
    }

    isProductInCart() {
        return this.cart.items.some(cartItem => cartItem.productId === this.product._id);
    }

    setMaxAmount(school?: boolean) {
        let familyValue: number;
        school ? familyValue = this.family.schoolChildren : familyValue = this.family.familySize;
        this.product.famSizeAmount.forEach(mapping => {
            if (mapping.minFamSize <= familyValue && familyValue <= mapping.maxFamSize) {
            this.maxAmount = mapping.maxAmount;
            }
        });
        console.log(this.maxAmount);
    }

    removeProductFromCart() {
        this.cart.items = this.cart.items.filter(cartItem => cartItem.productId !== this.product._id);
    }
}
