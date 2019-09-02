import { Component, OnInit, Input } from '@angular/core';
import { Family } from 'src/app/models/family.model';
import { Product } from 'src/app/models/product.model';
import { Type } from 'src/app/models/type.model';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  atTypeMaxAmount = false;
  @Input() family: Family;
  panelOpenState = false;
  products: Product[] = [];
  onlySchoolProducts: boolean;
  schoolIncluded: boolean;
  @Input() type: Type;
  typeAmountInCart = 0;
  typeMaxAmount: number = null;

  constructor() { }

  ngOnInit() {
    this.schoolIncluded = this.family.schoolChildren > 0;
    this.setProducts(this.type.products);
    this.setTypeMaxAmount();
    console.log(this.products);
  }

  closePanel() {
    this.panelOpenState = false;
  }

  isOnlySchoolProducts() {
    let counter = 0;
    this.products.forEach(product => {
      if (product.school) {
        counter ++;
      }
    });
    return counter === this.products.length;
  }

  setProducts(products: Product[]) {
    products.forEach(product => {
      if (product.prodSizeAmount) {
        product.prodSizeAmount.forEach(mapping => {
          if (mapping.minFamSize <= this.family.familySize
            && this.family.familySize <= mapping.maxFamSize) {
              this.products.push(product);
          }
        });
      } else {
        this.products.push(product);
      }
    });
    this.onlySchoolProducts = this.isOnlySchoolProducts();
    // this.sortProductsByName();
  }

  setTypeMaxAmount() {
    if (this.type.typeSizeAmount) {
      this.type.typeSizeAmount.forEach(mapping => {
        if (mapping.minFamSize <= this.family.familySize
          && this.family.familySize <= mapping.maxFamSize) {
            this.typeMaxAmount = mapping.maxAmount;
          }
      });
    } else {
      this.typeMaxAmount = null;
    }
  }

  updateAtTypeMaxAmount(atTypeMaxAmount: boolean) {
    this.atTypeMaxAmount = atTypeMaxAmount;
  }

  updateTypeAmountInCart(amount: number) {
    this.typeAmountInCart = amount;
  }

  // sortProductsByName() {
  //   this.products.sort((before, after) =>
  //   before.productName.trim().toLowerCase() >
  //    after.productName.trim().toLowerCase() ?
  //    1 : -1);
  // }
}
