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
  subProduct: boolean;
  @Input() subType: boolean;
  @Input() topTypeName: string;
  @Input() type: Type;
  typeAmountInCart = 0;
  typeMaxAmount: number = null;

  constructor() { }

  ngOnInit() {
    this.schoolIncluded = this.family.schoolChildren > 0;
    this.setProducts();
    this.setTypeMaxAmount();
    this.subProduct = this.subType;
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

  setProducts() {
    this.type.products.forEach(product => {
      if (product.type) {
        this.topTypeName = this.type.typeName;
      }
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
    this.sortProductsByName();
  }

  setTypeMaxAmount() {
    if (this.type.typeSizeAmount) {
      this.type.typeSizeAmount.forEach(mapping => {
        if (mapping.minFamSize <= this.family.familySize
          && this.family.familySize <= mapping.maxFamSize) {
            this.typeMaxAmount = mapping.maxAmount;
          }
      });
    }
  }

  sortProductsByName() {
    this.products.sort((before, after) => {
      return before.type ?
        before.type.typeName > after.productName || before.productName > before.type.typeName ? 1 : -1
      :
        before.productName > after.productName ? 1 : -1;
    });
  }

  updateTypeAmount(addOne: boolean) {
    if (!this.atTypeMaxAmount && addOne) {
      this.typeAmountInCart++;
    }
    if (this.typeAmountInCart !== 0 && !addOne) {
      this.typeAmountInCart--;
    }
    this.atTypeMaxAmount = this.typeAmountInCart === this.typeMaxAmount;
  }
}
