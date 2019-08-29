import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BaseProductComponent } from './node_modules/src/app/models/base-product-component.model';
import { CartService } from './node_modules/src/app/services/cart.service';
import { PointService } from './node_modules/src/app/services/point.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseProductComponent implements OnInit {
  atMaxAmount: boolean;
  amountInCart: number;
  pointsDisabled: boolean;
  currentPoints: number;
  @Output() pointEmitter = new EventEmitter<number>();
  pointProduct: boolean;

  constructor(protected cartService: CartService, private pointService: PointService) {
    super(cartService);
   }

  ngOnInit() {
    this.cartService.getCart().subscribe(currentCart => {
      this.cart = currentCart;
      this.inCart = this.isProductInCart();
      this.setAmountInCart();
    });
    this.pointService.getCurrentPoints().subscribe(currentPoints => {
      this.currentPoints = currentPoints;
      this.isPointsDisabled();
    });
    this.setMaxAmount();
    this.atMaxAmount = this.isProductAtMaxAmount();
    this.pointProduct = this.isPointProduct();
  }

  addOne() {
    if (!this.isProductInCart()) {
      this.addProductToCart();
    } else if (!this.atMaxAmount) {
      this.getProductInCart().amount++;
    }
    this.inCart = this.isProductInCart();
    this.setAmountInCart();
    this.atMaxAmount = this.isProductAtMaxAmount();
  }

  addOnePoints() {
    if (this.currentPoints >= this.product.points) {
      this.addOne();
      this.removePoints();
    }
    this.pointsDisabled = this.isPointsDisabled();
  }

  addPoints() {
    this.currentPoints = this.currentPoints + this.product.points;
    this.pointService.updatePoints(this.currentPoints);
    this.pointEmitter.emit(this.currentPoints);
  }

  setAmountInCart() {
    this.getProductInCart() ? this.amountInCart = this.getProductInCart().amount : this.amountInCart = 0;
  }

  isPointsDisabled() {
    return this.atMaxAmount || this.currentPoints < this.product.points;
  }

  isPointProduct() {
    return this.product.points ? true : false;
  }

  isProductAtMaxAmount() {
    return this.isProductInCart() ? this.getProductInCart().amount === this.maxAmount : false;
  }

  removeOne() {
    this.getProductInCart().amount--;
    if (this.getProductInCart().amount === 0) {
      this.removeProductFromCart();
    }
    this.inCart = this.isProductInCart();
    this.setAmountInCart();
    this.atMaxAmount = this.isProductAtMaxAmount();
  }

  removeOnePoints() {
    this.removeOne();
    this.addPoints();
    this.pointsDisabled = this.isPointsDisabled();
  }

  removePoints() {
      this.currentPoints = this.currentPoints - this.product.points;
      this.pointService.updatePoints(this.currentPoints);
      this.pointEmitter.emit(this.currentPoints);
  }
}
