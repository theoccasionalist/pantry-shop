import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/models/product.model';
import { Family } from 'src/app/models/family.model';
import { FamilyService } from 'src/app/services/family.service';

@Component({
  selector: 'app-after-school-product',
  templateUrl: './after-school-product.component.html',
  styleUrls: ['./after-school-product.component.css']
})
export class AfterSchoolProductComponent implements OnInit {
  afterSchoolProducts: Product[];
  afterSchoolCart: any[];
  family: Family;
  limits = [
    {name: 'Canned Meal', limit: null},
    {name: 'Fruit', limit: null},
    {name: 'Snacks', limit: null}
  ];

  constructor(private cartService: CartService, private familyService: FamilyService, private productService: ProductService) {
   }

  ngOnInit() {
    this.family = this.familyService.getFamily();
    this.setAfterSchoolProductLimits();
    this.afterSchoolProducts = this.productService.getAfterSchoolProducts();
    this.afterSchoolCart = this.cartService.getServiceAfterSchoolItems();
  }

  getAfterSchoolComponentCart() {
    return this.afterSchoolCart;
  }

  getAfterSchoolProductInCart(afterSchoolProduct: Product) {
    return this.afterSchoolCart.find(cartItem => cartItem.name === afterSchoolProduct.name);
  }

  getAfterSchoolProductAmountInCart(afterSchoolProduct: Product) {
    return !this.getAfterSchoolProductInCart(afterSchoolProduct) ?
    0 : this.getAfterSchoolProductInCart(afterSchoolProduct).amount;
  }

  getAfterSchoolProductLimit(afterSchoolProduct: Product) {
    return this.limits.find(cartItem => cartItem.name === afterSchoolProduct.name).limit;
  }

  setAfterSchoolProductLimits() {
    for (let i = 0; i <= this.limits.length - 1; i++) {
      for (let j = 10; j >= 1; j = j - 1) {
        if (this.family.schoolChildren === j) {
          this.limits[i].limit = j;
        }
      }
    }
  }

  isAfterSchoolProductInCart(afterSchoolProduct: Product) {
    return this.getAfterSchoolProductInCart(afterSchoolProduct) ? true : false;
    // this.getAfterSchoolProductInCart(afterSchoolProduct).amount >= 1
  }

  isAfterSchoolProductAtLimit(afterSchoolProduct: Product) {
    return this.getAfterSchoolProductInCart(afterSchoolProduct) &&
    this.getAfterSchoolProductInCart(afterSchoolProduct).amount === this.getAfterSchoolProductLimit(afterSchoolProduct) ?
    true : false;
  }

  addAfterSchoolProduct(afterSchoolProduct: Product) {
    if (!this.isAfterSchoolProductAtLimit(afterSchoolProduct)) {
      if (!this.isAfterSchoolProductInCart(afterSchoolProduct)) {
        this.afterSchoolCart.push({name: afterSchoolProduct.name, amount: 1});
      } else {
        this.getAfterSchoolProductInCart(afterSchoolProduct).amount++;
      }
    }
  }

  removeAfterSchoolProduct(afterSchoolProduct: Product) {
    if (this.getAfterSchoolProductInCart(afterSchoolProduct).amount >= 1) {
      this.getAfterSchoolProductInCart(afterSchoolProduct).amount--;
      if (this.getAfterSchoolProductInCart(afterSchoolProduct).amount === 0) {
        this.afterSchoolCart = this.afterSchoolCart.filter(cartItem => cartItem.name !== afterSchoolProduct.name);
      }
    }
  }
}
