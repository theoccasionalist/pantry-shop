import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/models/product.model';
import { CartCategoryItems } from '../../models/cart-category-items.model';
import { FamilyService } from 'src/app/services/family.service';
import { Family } from 'src/app/models/family.model';

@Component({
  selector: 'app-bulk-product',
  templateUrl: './bulk-product.component.html',
  styleUrls: ['./bulk-product.component.css']
})
export class BulkProductComponent implements OnInit {
  family: Family;
  bulkProducts: Product[];
  bulkCart: any[];
  panelOpenState = false;
  amountTypes: Map<string, string> = new Map ([
    ['fruit', 'Mixed Fruit'],
    ['vegetables', 'Mixed Vegetables'],
    ['bread', 'One Loaf']
  ]);


  constructor(private cartService: CartService, private familyService: FamilyService, private productService: ProductService) {}

  ngOnInit() {
    this.family = this.familyService.getFamily();
    this.bulkProducts = this.productService.getBulkProducts();
    this.bulkCart = this.cartService.getServiceBulkItems();
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

  getMeatLbs() {
    if (this.family.familySize <= 2) {
      return '3 ';
    } else if (this.family.familySize >= 6) {
      return '7 ';
    } else {
      return '5 ';
    }
  }

  isProductInCart(bulkProduct: Product) {
    return this.bulkCart.some(cartItem => cartItem.name === bulkProduct.name);
  }

  updateBulkCart(bulkProduct: Product) {
    const amountType = this.getProductAmountType(bulkProduct);
    this.isProductInCart(bulkProduct) ?
      this.bulkCart = this.bulkCart.filter((cartItem) => cartItem.name !== bulkProduct.name) :
      this.bulkCart.push({name: bulkProduct.name, amount: amountType});
  }
}
