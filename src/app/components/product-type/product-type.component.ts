import { Component, OnInit, Input } from '@angular/core';
import { Family } from 'src/app/models/family.model';
import { Product } from 'src/app/models/product.model';
import { Type } from 'src/app/models/type.model';
import { TypeTracker } from 'src/app/models/type-tracker.model';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  @Input() family: Family;
  onlySchoolProducts: boolean;
  panelOpenState = false;
  products: Product[] = [];
  productTypes: any[] = [];
  schoolIncluded: boolean;
  subType: boolean;
  @Input() subTypes: Type[];
  @Input() superType: {superTypeId: string, superTypeName: string};
  @Input() type: Type;
  typeMaxAmount: number = null;
  typeTracker: TypeTracker = {
    typeId: null,
    atTypeMaxAmount: null,
    typeAmountInCart: null
  };

  constructor(private typeService: TypeService) { }

  ngOnInit() {
    this.schoolIncluded = this.family.schoolChildren > 0;
    this.setOnlySchoolProducts();
    this.setSubType();
    this.setSubTypePanelOpen();
    this.setSuperType();
    this.setProductTypes();
    this.setTypeMaxAmount();
    this.sortProductTypesByName();
    this.typeService.getTypeTracker().subscribe(typeTrackers => {
      this.setTypeTracker(typeTrackers);
    });
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
      let familyValue: number;
      product.school ? familyValue = this.family.schoolChildren : familyValue = this.family.familySize;
      if (product.prodSizeAmount) {
        product.prodSizeAmount.forEach(mapping => {
          if (mapping.minFamSize <= familyValue
            && familyValue <= mapping.maxFamSize) {
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

  setSubTypePanelOpen() {
    this.subType ? this.panelOpenState = true : this.panelOpenState = false;
  }

  setSuperType() {
    if (this.subTypes) {
      this.superType = {superTypeId: this.type.typeId, superTypeName: this.type.typeName};
    }
  }

  setTypeMaxAmount() {
    this.type.products.forEach(product => {
      let familyValue: number;
      product.school ? familyValue = this.family.schoolChildren : familyValue = this.family.familySize;
      if (this.type.typeSizeAmount) {
        this.type.typeSizeAmount.forEach(mapping => {
          if (mapping.minFamSize <= familyValue && familyValue <= mapping.maxFamSize) {
              this.typeMaxAmount = mapping.maxAmount;
            }
        });
      }
    });
  }

  setTypeTracker(typeTrackers: TypeTracker[]) {
    if (this.type.typeSizeAmount) {
      typeTrackers.some(typeTracker => typeTracker.typeId === this.type.typeId) ?
        this.typeTracker = typeTrackers.find(typeTracker => typeTracker.typeId === this.type.typeId) :
        this.typeTracker = {typeId: this.type.typeId, atTypeMaxAmount: false, typeAmountInCart: 0};
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
    if (!this.typeTracker.atTypeMaxAmount && addOne) {
      this.typeTracker.typeAmountInCart++;
    }
    if (this.typeTracker.typeAmountInCart !== 0 && !addOne) {
      this.typeTracker.typeAmountInCart--;
    }
    this.typeTracker.atTypeMaxAmount = this.typeTracker.typeAmountInCart === this.typeMaxAmount;
    this.typeService.updateTypeTracker(this.typeTracker);
  }
}
