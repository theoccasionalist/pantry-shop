import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Family } from 'src/app/models/family.model';
import { ProductAmountType } from 'src/app/models/product-amount-type.model';

@Component({
  selector: 'app-dairy-product',
  templateUrl: './dairy-product.component.html',
  styleUrls: ['./dairy-product.component.css']
})
export class DairyProductComponent implements OnInit {
  @Input() family: Family;
  dairyProducts: ProductAmountType[] = [];
  dairyCart: any[];
  panelOpenState = false;

  constructor(private cartService: CartService, private productService: ProductService) {}

  ngOnInit() {
    this.productService.getDairyProducts().subscribe((response: any[]) => {
      response.forEach(element => this.dairyProducts.push({
        name: element.name,
        sizeAmount: element.sizeAmount
      }));
    });
    this.dairyCart = this.cartService.getServiceDairyItems();
  }

  getDairyComponentCart() {
    return this.dairyCart;
  }

  displayAmountType(dairyProduct: ProductAmountType) {
    return this.dairyCart.find(cartItem => cartItem.name === dairyProduct.name).amount;
  }

  isProductInCart(dairyProduct: ProductAmountType) {
    return this.dairyCart.some(cartItem => cartItem.name === dairyProduct.name);
  }

  updateDairyCart(dairyProduct: ProductAmountType) {
    const amountType = this.getAmountType(dairyProduct);
    this.isProductInCart(dairyProduct) ?
      this.dairyCart = this.dairyCart.filter((cartItem) => cartItem.name !== dairyProduct.name) :
      this.dairyCart.push({name: dairyProduct.name, amount: amountType});
  }

  private getAmountType(dairyProduct: ProductAmountType) {
    let amountType: string;
    dairyProduct.sizeAmount.forEach(element => {
      if (element.size.includes(this.family.familySize)) {
        amountType = element.amount;
    }});
    return amountType;
  }
}
