import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/models/product.model';
import { Family } from 'src/app/models/family.model';
import { CartCategoryItems } from 'src/app/models/cart-category-items.model';

@Component({
  selector: 'app-bulk-product',
  templateUrl: './bulk-product.component.html',
  styleUrls: ['./bulk-product.component.css']
})
export class BulkProductComponent implements OnInit {
  bulkProducts: Product[];
  bulkCart: any[];
  panelOpenState = false;
  amountTypes: Map<string, string> = new Map ([
    ['fruit', 'Mixed Fruit'],
    ['vegetables', 'Mixed Vegetables'],
    ['bread', 'One Loaf']
  ]);


  constructor(private cartService: CartService, private productService: ProductService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(cart =>
      cart.categoryItems.some(el => el.category === 'bulk') ?
       this.bulkCart = cart.categoryItems.filter(el => el.category === 'bulk')[0].items :
       this.bulkCart = []
    );
    this.bulkProducts = this.productService.getBulkProducts();
  }

  getBulkComponentCart() {
    return this.bulkCart;
  }

  getProductInCart(bulkProduct: Product) {
    return this.bulkCart.find(cartItem => cartItem.name === bulkProduct.name);
  }

  getProductAmountType(bulkProduct: Product) {
    const productName = bulkProduct.name.trim().toLowerCase();
    let amountType = 'Added to Cart';
    this.amountTypes.forEach((value, key) => {
        if (productName.includes(key)) {
            amountType = this.amountTypes.get(key);
        }
      }
    );
    return amountType;
  }

  isProductInCart(bulkProduct: Product) {
    return this.bulkCart.some(cartItem => cartItem.name === bulkProduct.name);
  }

  updateBulkCart(bulkProduct: Product) {
    const amountType = this.getProductAmountType(bulkProduct);
    this.isProductInCart(bulkProduct) ?
      this.bulkCart = this.bulkCart.filter(cartItem => cartItem.name !== bulkProduct.name) :
      this.bulkCart.push({name: bulkProduct.name, amount: amountType});
  }
}
