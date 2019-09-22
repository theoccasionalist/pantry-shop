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
  prodMaxProduct: boolean;
  @Input() product: Product;
  subProduct: boolean;
  @Input() superType: {superTypeId: string, superTypeName: string};
  @Input() type: Type;
  typeAmountProduct: boolean;

  constructor(private cartService: CartService, private pointService: PointService) {}

  ngOnInit() {
    this.setProdMaxProduct();
    this.setProdMaxAmount();
    this.setPointProduct();
    this.setSubProduct();
    this.setTypeAmountProduct();
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
  }

  addProductToCart() {
    let itemTypeId = this.type.typeId;
    let itemTypeName = this.type.typeName;
    if (this.superType) {
      itemTypeId = this.superType.superTypeId;
      itemTypeName = this.superType.superTypeName;
    }
    this.cart.cartItemsByType.some(itemsByType => itemTypeId === itemsByType.typeId) ?
      this.getProductTypeInCart().items.push({productId: this.product.productId, productName: this.product.productName, amount: 1}) :
      this.cart.cartItemsByType.push({typeId: itemTypeId, typeName: itemTypeName,
        items: [{productId: this.product.productId, productName: this.product.productName, amount: 1}]});
  }

  addOne() {
    if (!this.isProductInCart()) {
      this.addProductToCart();
    } else if (!this.atMaxAmount || !this.atTypeMaxAmount) {
      this.getProductInCart().amount++;
    }
    this.cartService.updateCart(this.cart);
    this.addOneTypeAmount.emit(true);
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
    if (this.getProductTypeInCart()) {
      return this.getProductTypeInCart().items.find(item => item.productId === this.product.productId);
    }
  }

  getProductTypeInCart() {
    return this.type.typeId === this.superType.superTypeId ?
      this.cart.cartItemsByType.find(cartItem => cartItem.typeId === this.type.typeId) :
      this.cart.cartItemsByType.find(cartItem => cartItem.typeId === this.superType.superTypeId);
  }

  isPointDisabled() {
    return this.atMaxAmount || this.currentPoints < this.product.points;
  }

  isProductAtMaxAmount() {
    return this.isProductInCart() ? this.getProductInCart().amount === this.prodMaxAmount : false;
  }

  isProductInCart() {
    return this.getProductInCart() ? true : false;
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
    this.getProductTypeInCart().items = this.getProductTypeInCart().items.filter(item => item.productId !== this.product.productId);
    if (!this.getProductTypeInCart().items.length) {
      this.cart.cartItemsByType = this.cart.cartItemsByType.filter(type => type.typeId !== this.getProductTypeInCart().typeId);
    }
  }

  setPointProduct() {
    this.pointProduct = this.product.points ? true : false;
  }

  setSubProduct() {
    this.subProduct = this.type.superTypeId ? true : false;
  }

  setProdMaxAmount() {
    let familyValue: number;
    this.product.school ? familyValue = this.family.schoolChildren : familyValue = this.family.familySize;
    console.log(familyValue);
    if (this.product.prodSizeAmount) {
      this.product.prodSizeAmount.forEach(mapping => {
          if (mapping.minFamSize <= familyValue && familyValue <= mapping.maxFamSize) {
          this.prodMaxAmount = mapping.maxAmount;
          }
      });
    }
  }

  setProdMaxProduct() {
    this.prodMaxProduct = this.product.prodSizeAmount ? true : false;
  }

  setTypeAmountProduct() {
    this.typeAmountProduct = this.type.typeSizeAmount ? true : false;
  }
}
