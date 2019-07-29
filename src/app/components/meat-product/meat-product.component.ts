import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { Family } from 'src/app/models/family.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-meat-product',
  templateUrl: './meat-product.component.html',
  styleUrls: ['./meat-product.component.css']
})
export class MeatProductComponent implements OnInit {
  @Input() family: Family;
  includeMeat: boolean;
  meatCart: any[];
  meatAmount: number;
  meatProducts: Product[] = [];
  panelOpenState = false;
  preference: string;
  preferenceOptions: string[] = ['Preferred', 'Neutral', 'Exclude'];

  constructor(private cartService: CartService, private viewChange: ChangeDetectorRef, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getMeatProducts().subscribe((response: any[]) => {
      response.forEach(element => this.meatProducts.push({name: element.name}));
    });
    this.productService.getMeatAmounts().subscribe((response: any[]) => {
      response.forEach(element => {
        if (element.size.includes(this.family.familySize)) {
          this.meatAmount = element.amount;
      }});
    });
    this.meatCart = this.cartService.getServiceMeatItems();
    console.log(this.meatCart);
    this.setIncludeMeatFlag();
  }

  getMeatComponentCart() {
    return this.meatCart;
  }

  isPreferenceChecked(meatProduct: Product, preferenceOption: string) {
    return this.meatCart.some(cartItem => cartItem.name === meatProduct.name
      && cartItem.preference === preferenceOption);
  }

  updateIncludeMeatFlag() {
    this.includeMeat = !this.includeMeat;
    if (!this.meatCart.length) {
      this.initMeatCart();
    }
  }

  updateMeatCart(meatProduct: Product, selectedPreference: string) {
    const inCart = this.meatCart.some(cartItem => cartItem.name === meatProduct.name);
    if (!inCart) {
      this.meatCart.push({
        name: meatProduct.name,
        preference: selectedPreference
      });
    } else {
      const index = this.meatCart.findIndex(meatItem => meatProduct.name === meatItem.name);
      this.meatCart[index].preference = selectedPreference;
    }
    if (this.meatCart.length === this.meatProducts.length) {
      this.excludeAllCheck();
    }
  }

  private initMeatCart() {
    this.meatProducts.forEach(cartItem =>
        this.meatCart.push({
          name: cartItem.name,
          preference: this.preferenceOptions[1]
    }));
  }

  private excludeAllCheck() {
    const hasItems = this.meatCart.filter(cartItem => cartItem.preference !== this.preferenceOptions[2]);
    if (!hasItems.length) {
      this.meatCart = [];
      this.viewChange.markForCheck();
      this.includeMeat = false;
    }
  }

  private setIncludeMeatFlag() {
    this.meatCart.length ? this.includeMeat = true : this.includeMeat = false;
  }
}
