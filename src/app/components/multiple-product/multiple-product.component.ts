import { Component, OnInit } from '@angular/core';
import { BaseProductComponent } from 'src/app/models/base-product-component.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-multiple-product',
  templateUrl: './multiple-product.component.html',
  styleUrls: ['./multiple-product.component.css']
})
export class MultipleProductComponent extends BaseProductComponent implements OnInit {
  schoolProduct: boolean;
  schoolIncluded: boolean;

  constructor(protected cartService: CartService, protected productService: ProductService) {
    super(cartService, productService);
   }

  ngOnInit() {
    this.cartService.getCart().subscribe(currentCart => this.cart = currentCart);
    this.productService.getProductsByType(this.type).subscribe((products: Product[]) => this.products = products);
    this.schoolIncluded = this.isSchoolIncluded();
    this.schoolProduct = this.isSchoolProduct();
  }

  isSchoolProduct() {
    console.log(this.type.toLowerCase().includes('school'));
    return this.type.toLowerCase().includes('school');
  }

  isSchoolIncluded() {
    return this.family.schoolChildren > 0;
  }

}
