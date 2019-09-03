import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { PointService } from 'src/app/services/point.service';
import { Cart } from 'src/app/models/cart.model';
import { Family } from 'src/app/models/family.model';
import { Product } from 'src/app/models/product.model';
import { Type } from 'src/app/models/type.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  amountInCart: number;
  atMaxAmount: boolean;
  @Input() atTypeMaxAmount: boolean;
  @Output() atTypeMaxAmountEmitter = new EventEmitter<boolean>();
  cart: Cart;
  currentPoints: number;
  @Input() family: Family;
  inCart: boolean;
  inFamilySize = false;
  pointDisabled: boolean;
  @Output() pointDisabledEmitter = new EventEmitter();
  pointProduct: boolean;
  prodMaxAmount: number;
  @Input() product: Product;
  @Input() type: Type;
  @Input() typeAmountInCart: number;
  @Output() typeAmountInCartEmitter = new EventEmitter<number>();
  typeAmountProduct: boolean;
  @Input() typeMaxAmount: number;

  constructor(private viewChange: ChangeDetectorRef, private cartService: CartService, private pointService: PointService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(currentCart => {
      this.cart = currentCart;
      this.inCart = this.isProductInCart();
      this.setAmountInCart();
      this.atMaxAmount = this.isProductAtMaxAmount();
    });
    this.pointService.getCurrentPoints().subscribe(currentPoints => {
      this.currentPoints = currentPoints;
      this.isPointDisabled();
    });
    this.pointProduct = this.isPointProduct();
    this.setProdMaxAmount();
    this.typeAmountProduct = this.isTypeAmountProduct();
    console.log(this.product);
  }

  addProductToCart() {
    this.cart.items.push({
        productId: this.product.productId, productName: this.product.productName, amount: 1, typeName: this.type.typeName
    });
  }

  addOne() {
    if (!this.isProductInCart()) {
      this.addProductToCart();
    } else if (!this.atMaxAmount || !this.atTypeMaxAmount) {
      this.getProductInCart().amount++;
    }
    this.inCart = this.isProductInCart();
    this.setAmountInCart();
    this.atMaxAmount = this.isProductAtMaxAmount();
    this.AddOneTypeAmountInCart();
    this.atTypeMaxAmount = this.isProductAtTypeMaxAmount();
    this.atTypeMaxAmountEmitter.emit(this.atTypeMaxAmount);
    console.log(this.atTypeMaxAmount);
  }

  addOnePoints() {
    if (this.currentPoints >= this.product.points) {
      this.addOne();
      this.removePoints();
    }
    this.pointDisabledEmitter.emit();
    this.viewChange.markForCheck();
  }

  addPoints() {
    this.currentPoints = this.currentPoints + this.product.points;
    this.pointService.updatePoints(this.currentPoints);
  }

  getProductInCart() {
    return this.cart.items.find(cartItem => cartItem.productId === this.product.productId);
  }

  isPointDisabled() {
    this.pointDisabled = this.atMaxAmount || this.currentPoints < this.product.points;
  }

  isPointProduct() {
    return this.product.points ? true : false;
  }

  isProductAtMaxAmount() {
    return this.isProductInCart() ?
      this.getProductInCart().amount === this.prodMaxAmount : false;
  }

  isProductAtTypeMaxAmount() {
    console.log(this.typeAmountInCart);
    return this.isProductInCart() ? this.typeAmountInCart === this.typeMaxAmount : false;
  }

  isProductInCart() {
    return this.cart.items.some(cartItem => cartItem.productId === this.product.productId);
  }

  isTypeAmountProduct() {
    return this.type.typeSizeAmount ? true : false;
  }

  removeOne() {
    this.getProductInCart().amount--;
    if (this.getProductInCart().amount === 0) {
      this.removeProductFromCart();
    }
    this.inCart = this.isProductInCart();
    this.setAmountInCart();
    this.atMaxAmount = this.isProductAtMaxAmount();
    this.RemoveOneTypeAmountInCart();
    this.atTypeMaxAmount = this.isProductAtTypeMaxAmount();
    this.atTypeMaxAmountEmitter.emit(this.atTypeMaxAmount);
  }

  removeOnePoints() {
    this.removeOne();
    this.addPoints();
    this.pointDisabledEmitter.emit();
  }

  removePoints() {
      this.currentPoints = this.currentPoints - this.product.points;
      this.pointService.updatePoints(this.currentPoints);
  }

  removeProductFromCart() {
    this.cart.items = this.cart.items.filter(cartItem => cartItem.productId !== this.product.productId);
}

  setAmountInCart() {
    this.getProductInCart() ? this.amountInCart = this.getProductInCart().amount : this.amountInCart = 0;
  }

  setProdMaxAmount(school?: boolean) {
    let familyValue: number;
    school ? familyValue = this.family.schoolChildren : familyValue = this.family.familySize;
    if (this.product.prodSizeAmount) {
      this.product.prodSizeAmount.forEach(mapping => {
          if (mapping.minFamSize <= familyValue && familyValue <= mapping.maxFamSize) {
          this.prodMaxAmount = mapping.maxAmount;
          }
      });
    }
  }

  AddOneTypeAmountInCart() {
    if (this.typeMaxAmount != null) {
      this.typeAmountInCart++;
      this.typeAmountInCartEmitter.emit(this.typeAmountInCart);
    }

  }

  RemoveOneTypeAmountInCart() {
    if (this.typeMaxAmount != null) {
      this.typeAmountInCart--;
      this.typeAmountInCartEmitter.emit(this.typeAmountInCart);
    }
  }

  updateAtTypeMaxAmount(atTypeMaxAmount: boolean) {
    this.atTypeMaxAmount = atTypeMaxAmount;
  }

  updateTypeAmountInCart(amount: number) {
    this.typeAmountInCart = amount;
  }
}
