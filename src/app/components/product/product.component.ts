import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { PointService } from 'src/app/services/point.service';
import { Family } from 'src/app/models/family.model';
import { Product } from 'src/app/models/product.model';
import { Type } from 'src/app/models/type.model';
import { CartItemsByType } from 'src/app/models/cart-items-by-type.model';

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
  cart: CartItemsByType[];
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
    let itemTypeId = this.type._id;
    let itemTypeName = this.type.typeName;
    if (this.superType) {
      itemTypeId = this.superType.superTypeId;
      itemTypeName = this.superType.superTypeName;
    }
    this.cart.some(itemsByType => itemTypeId === itemsByType._id) ?
      this.getProductTypeInCart().items.push({_id: this.product._id, productName: this.product.productName, amount: 1}) :
      this.cart.push({_id: itemTypeId, typeName: itemTypeName,
        items: [{_id: this.product._id, productName: this.product.productName, amount: 1}]});
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
      return this.getProductTypeInCart().items.find(item => item._id === this.product._id);
    }
  }

  getProductTypeInCart() {
    return this.type._id === this.superType.superTypeId ?
      this.cart.find(cartItem => cartItem._id === this.type._id) :
      this.cart.find(cartItem => cartItem._id === this.superType.superTypeId);
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
    this.getProductTypeInCart().items = this.getProductTypeInCart().items.filter(item => item._id !== this.product._id);
    if (!this.getProductTypeInCart().items.length) {
      this.cart = this.cart.filter(type => type._id !== this.getProductTypeInCart()._id);
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
