import { Component, OnInit } from '@angular/core';
import { Family } from 'src/app/models/family.model';
import { Product } from 'src/app/models/product.model';
import { FamilyService } from 'src/app/services/family.service';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-meat-product',
  templateUrl: './meat-product.component.html',
  styleUrls: ['./meat-product.component.css']
})
export class MeatProductComponent implements OnInit {
  family: Family;
  meatProducts: Product[];
  meatCart: any[];
  panelOpenState = false;

  constructor(private cartService: CartService, private familyService: FamilyService, private productService: ProductService) { }

  ngOnInit() {
    this.family = this.familyService.getFamily();
    this.meatProducts = this.productService.getMeatProducts();
    this.meatCart = this.cartService.getServiceMeatItems();
  }

  getBulkComponentCart() {
    return this.meatCart;
  }

  getProductInCart(meatProduct: Product) {
    return this.meatCart.find(cartItem => cartItem.name === meatProduct.name);
  }

  isProductInCart(bulkProduct: Product) {
    return this.meatCart.some(cartItem => cartItem.name === bulkProduct.name);
  }

}
