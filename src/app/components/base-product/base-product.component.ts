import { Component, OnInit, Input } from '@angular/core';
import { CartItemsByType } from 'src/app/models/cart-items-by-type.model';
import { CartService } from 'src/app/services/cart.service';
import { Type } from 'src/app/models/type.model';
import { Family } from 'src/app/models/family.model';
import { TypeProduct } from 'src/app/models/type-product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base-product',
  templateUrl: './base-product.component.html',
  styleUrls: ['./base-product.component.css']
})
export class BaseProductComponent implements OnInit {
  amountInCart: number;
  @Input() cart: CartItemsByType[];
  inCart: boolean;
  @Input() family: Family;
  @Input() product: TypeProduct;
  typeAmountReceived: number;
  subscription = new Subscription();
  @Input() type: Type;

  constructor(protected cartService: CartService) { }

  ngOnInit() {
  }

  addOneToCart() {
    this.getProductInCart().amount++;
    this.cartService.updateCart(this.cart);
  }

  addProductToCart() {
    if (this.isTypeInCart()) {
      this.getTypeInCart().products.push(
        {productId: this.product._id, productName: this.product.productName, amount: 1}
        );
    } else {
      if (this.type.typeLimits && !this.type.typeLimits.enableTypeTracking) {
        this.typeAmountReceived = this.type.typeLimits.typeSizeAmount.find(typeSizeAmount =>
          typeSizeAmount.minFamSize <= this.family.familySize && this.family.familySize <= typeSizeAmount.maxFamSize).maxAmount;
        this.cart.push({typeId: this.type._id, typeName: this.type.typeName, typeAmountReceived: this.typeAmountReceived,
          products: [{productId: this.product._id, productName: this.product.productName, amount: 1}]});
      } else {
        this.cart.push({typeId: this.type._id, typeName: this.type.typeName,
          products: [{productId: this.product._id, productName: this.product.productName, amount: 1}]});
      }
    }
    this.cartService.updateCart(this.cart);
    this.inCart = this.isProductInCart();
  }

  getAmountInCart() {
    if (this.isProductInCart()) {
      return this.getProductInCart().amount;
    } else {
      return 0;
    }
  }

  getProductInCart() {
      return this.getTypeInCart().products.find(product => product.productId === this.product._id);
  }

  getTypeInCart() {
    return this.cart.find((cartItemByType: CartItemsByType) => cartItemByType.typeId === this.type._id);
  }

  isProductInCart() {
    if (this.isTypeInCart()) {
      return this.getProductInCart() ? true : false;
    } else {
      return false;
    }
  }

  isTypeInCart() {
    return this.getTypeInCart() ? true : false;
  }

  removeProductFromCart() {
    this.getTypeInCart().products = this.getTypeInCart().products.filter(product => product.productId  !== this.product._id);
    if (!this.getTypeInCart().products.length) {
      this.cart = this.cart.filter((cartItemByType: CartItemsByType) => cartItemByType.typeId !== this.type._id);
    }
    this.inCart = this.isProductInCart();
    this.cartService.updateCart(this.cart);
  }

  subtractOneFromCart() {
    this.getProductInCart().amount--;
    this.cartService.updateCart(this.cart);
  }
}
