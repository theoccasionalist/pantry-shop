import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/models/product.model';
import { CartCategoryItems } from '../../models/cart-category-items.model';

@Component({
  selector: 'app-bulk-product',
  templateUrl: './bulk-product.component.html',
  styleUrls: ['./bulk-product.component.css']
})
export class BulkProductComponent implements OnInit {
  bulkProducts: Product[];
  bulkCart: any[];
  panelOpenState = false;
  something;

  constructor(private cartService: CartService, private productService: ProductService) {}

  ngOnInit() {
    this.bulkProducts = this.productService.getBulkProducts();
    this.bulkCart = this.cartService.getServiceBulkItems();
  }

  getBulkComponentCart() {
    return this.bulkCart;
  }

  getProductInCart(bulkProduct: Product) {
    return this.bulkCart.find(cartItem => cartItem.name === bulkProduct.name);
  }

  isProductInCart(bulkProduct: Product) {
    return this.bulkCart.some(cartItem => cartItem.name === bulkProduct.name);
  }

  updateBulkCart(bulkProduct: Product) {
    this.isProductInCart(bulkProduct) ?
      this.bulkCart = this.bulkCart.filter((cartItem) => cartItem.name !== bulkProduct.name) :
      this.bulkCart.push({name: bulkProduct.name});
  }
}
