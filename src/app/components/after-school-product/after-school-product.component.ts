import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AfterSchoolProduct } from 'src/app/models/after-school-product.model';
import { Family } from 'src/app/models/family.model';
import { FamilyService } from 'src/app/services/family.service';

@Component({
  selector: 'app-after-school-product',
  templateUrl: './after-school-product.component.html',
  styleUrls: ['./after-school-product.component.css']
})
export class AfterSchoolProductComponent implements OnInit {
  afterSchoolProducts: AfterSchoolProduct[];
  afterSchoolCart: any[];
  family: Family;
  productLimits = [];

  constructor(private cartService: CartService, private familyService: FamilyService, private productService: ProductService) {
   }

  ngOnInit() {
    this.family = this.familyService.getFamily();
    this.afterSchoolProducts = this.productService.getAfterSchoolProducts();
    this.afterSchoolCart = this.cartService.getServiceAfterSchoolItems();
  }

  getAfterSchoolComponentCart() {
    return this.afterSchoolCart;
  }

  getAfterSchoolProductInCart(afterSchoolProduct: AfterSchoolProduct) {
    return this.afterSchoolCart.find(cartItem => cartItem.name === afterSchoolProduct.name);
  }

  getAfterSchoolProductAmountInCart(afterSchoolProduct: AfterSchoolProduct) {
    return !this.getAfterSchoolProductInCart(afterSchoolProduct) ?
    0 : this.getAfterSchoolProductInCart(afterSchoolProduct).amount;
  }

  getAfterSchoolProductLimit(afterSchoolProduct: AfterSchoolProduct) {
    const childSize = this.family.schoolChildren;
    let limit: number;
    afterSchoolProduct.sizeLimit.forEach(element => (
      element.size.includes(childSize) ? limit = element.limit : limit
    ));
    return limit;
  }

  isAfterSchoolProductInCart(afterSchoolProduct: AfterSchoolProduct) {
    return this.getAfterSchoolProductInCart(afterSchoolProduct) ? true : false;
  }

  isAfterSchoolProductAtLimit(afterSchoolProduct: AfterSchoolProduct) {
    return this.getAfterSchoolProductInCart(afterSchoolProduct) &&
    this.getAfterSchoolProductInCart(afterSchoolProduct).amount === this.getAfterSchoolProductLimit(afterSchoolProduct);
  }

  addAfterSchoolProduct(afterSchoolProduct: AfterSchoolProduct) {
    if (!this.isAfterSchoolProductAtLimit(afterSchoolProduct)) {
      if (!this.isAfterSchoolProductInCart(afterSchoolProduct)) {
        this.afterSchoolCart.push({name: afterSchoolProduct.name, amount: 1});
      } else {
        this.getAfterSchoolProductInCart(afterSchoolProduct).amount++;
      }
    }
  }

  removeAfterSchoolProduct(afterSchoolProduct: AfterSchoolProduct) {
    if (this.getAfterSchoolProductInCart(afterSchoolProduct).amount >= 1) {
      this.getAfterSchoolProductInCart(afterSchoolProduct).amount--;
      if (this.getAfterSchoolProductInCart(afterSchoolProduct).amount === 0) {
        this.afterSchoolCart = this.afterSchoolCart.filter(cartItem => cartItem.name !== afterSchoolProduct.name);
      }
    }
  }
}
