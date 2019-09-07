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
  productTypes: any[] = [];
  schoolIncluded: boolean;
  subType: boolean;
  @Input() subTypes: Type[];
  @Input() superTypeName: string;
  @Input() type: Type;
  typeAmountInCart = 0;
  typeMaxAmount: number = null;

  constructor() { }

  ngOnInit() {
    this.schoolIncluded = this.family.schoolChildren > 0;
    this.setOnlySchoolProducts();
    this.setSubType();
    this.setSuperTypeName();
    this.setProductTypes();
    this.setTypeMaxAmount();
    this.sortProductTypesByName();
    console.log(this.products, this.productTypes);
  }

  closePanel() {
    this.panelOpenState = false;
  }

  setOnlySchoolProducts() {
    let counter = 0;
    this.type.products.forEach(product => {
      if (product.school) {
        counter ++;
      }
    });
    this.onlySchoolProducts = counter === this.type.products.length;
  }

  setProductTypes() {
    this.type.products.forEach(product => {
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
    if (this.subTypes) {
      this.subTypes = this.subTypes.filter(subType => subType.superTypeId === this.type.typeId);
    }
    this.subTypes ? this.productTypes = [...this.products, ...this.subTypes] : this.productTypes = this.products;
  }

  setSubType() {
    this.subType = this.type.superTypeId ? true : false;
  }

  setSuperTypeName() {
    if (this.subTypes) {
      this.superTypeName = this.type.typeName;
    }
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

  sortProductTypesByName() {
    this.productTypes.sort((before, after) => {
      return before.typeId ?
        before.typeName > after.productName || before.productName > before.typeName ? 1 : -1
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
