import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Output() addOneTypeAmount = new EventEmitter<boolean>();
  amountInCart: number;
  atMaxAmount: boolean;
  @Input() atTypeMaxAmount: boolean;
  cart: Cart;
  currentPoints: number;
  @Input() family: Family;
  inCart: boolean;
  pointDisabled: boolean;
  pointProduct: boolean;
  prodMaxAmount: number;
  @Input() product: Product;
  subProduct: boolean;
  @Input() superTypeName: string;
  @Input() type: Type;
  typeAmountProduct: boolean;

  constructor(private cartService: CartService, private pointService: PointService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(currentCart => {
      this.cart = currentCart;
      this.inCart = this.isProductInCart();
      this.amountInCart = this.getAmountInCart();
      this.atMaxAmount = this.isProductAtMaxAmount();
    });
    this.pointService.getCurrentPoints().subscribe(currentPoints => {
      this.currentPoints = currentPoints;
      this.pointDisabled = this.isPointDisabled();
    });
    this.setPointProduct();
    this.setProdMaxAmount();
    this.setSubProduct();
    this.setTypeAmountProduct();
    console.log(this.product);
  }

  addProductToCart() {
    let itemTypeName = this.type.typeName;
    if (this.superTypeName) {
      itemTypeName = this.superTypeName;
    }
    this.cart.items.push({
        productId: this.product.productId, productName: this.product.productName, amount: 1, typeName: itemTypeName
    });
    console.log(this.cart);
  }

  addOne() {
    if (!this.isProductInCart()) {
      this.addProductToCart();
    } else if (!this.atMaxAmount || !this.atTypeMaxAmount) {
      this.getProductInCart().amount++;
    }
    this.cartService.updateCart(this.cart);
    this.addOneTypeAmount.emit(true);
    console.log(this.atTypeMaxAmount, this.cart);
  }

  addOnePoints() {
    if (this.currentPoints >= this.product.points) {
      this.addOne();
      this.removePoints();
    }
  }

  addPoints() {
    this.currentPoints = this.currentPoints + this.product.points;
    this.pointService.updatePoints(this.currentPoints);
  }

  getAmountInCart() {
    return this.getProductInCart() ? this.getProductInCart().amount : 0;
  }

  getProductInCart() {
    return this.cart.items.find(cartItem => cartItem.productId === this.product.productId);
  }

  isPointDisabled() {
    return this.atMaxAmount || this.currentPoints < this.product.points;
  }

  isProductAtMaxAmount() {
    return this.isProductInCart() ? this.getProductInCart().amount === this.prodMaxAmount : false;
  }

  isProductInCart() {
    return this.cart.items.some(cartItem => cartItem.productId === this.product.productId);
  }

  removeOne() {
    this.getProductInCart().amount--;
    if (this.getProductInCart().amount === 0) {
      this.removeProductFromCart();
    }
    this.cartService.updateCart(this.cart);
    this.addOneTypeAmount.emit(false);
  }

  removeOnePoints() {
    this.removeOne();
    this.addPoints();
  }

  removePoints() {
      this.currentPoints = this.currentPoints - this.product.points;
      this.pointService.updatePoints(this.currentPoints);
  }

  removeProductFromCart() {
    this.cart.items = this.cart.items.filter(cartItem => cartItem.productId !== this.product.productId);
  }

  setPointProduct() {
    this.pointProduct = this.product.points ? true : false;
  }

  setSubProduct() {
    this.subProduct = this.type.superTypeId ? true : false;
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

  setTypeAmountProduct() {
    this.typeAmountProduct = this.type.typeSizeAmount ? true : false;
  }
}
