import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/models/product.model';
import { BaseProductComponent } from 'src/app/models/base-product-component.model';
import { filter, mergeMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent extends BaseProductComponent implements OnInit {

  constructor(protected cartService: CartService, protected productService: ProductService) {
    super(cartService, productService);
  }

  ngOnInit() {
    this.cartService.getCart().subscribe(currentCart => this.cart = currentCart);
    this.productService.getProductsByType(this.type).subscribe((products: Product[]) => this.products = products);
  }

  getUnit(product: Product) {
    let unit: string;
    product.sizeAmount.forEach(el => {
      if (el.minSize <= this.family.familySize && this.family.familySize <= el.maxSize) {
        if (el.subUnit) {
          unit = el.subUnit;
        } else {
          unit = product.unit;
        }
    }});
    return unit;
  }

  updateCart(product: Product) {
    const productAmount = this.getAmount(product);
    const productUnit = this.getUnit(product);
    this.isProductInCart(product) ?
      this.cart.items = this.cart.items.filter(cartItem => cartItem.productId !== product._id) :
      this.cart.items.push({productId: product._id, type: product.type, name: product.name, amount: productAmount, unit: productUnit});
    this.cartService.updateCart(this.cart);
  }
}
