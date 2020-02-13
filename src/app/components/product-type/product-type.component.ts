import { Component, OnInit, Input } from '@angular/core';
import { Family } from 'src/app/models/family.model';
import { Product } from 'src/app/models/product.model';
import { Type } from 'src/app/models/type.model';
import { TypeTracker } from 'src/app/models/type-tracker.model';
import { TypeTrackerService } from 'src/app/services/type-tracker.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  atTypeMaxAmount: boolean;
  @Input() family: Family;
  infantsIncluded: boolean;
  onlyInfantProducts: boolean;
  onlySchoolProducts: boolean;
  panelOpenState = false;
  products: Product[] = [];
  productTypes: any[] = [];
  schoolIncluded: boolean;
  subType: boolean;
  @Input() subTypes: Type[];
  @Input() superType: {superTypeId: string, superTypeName: string};
  @Input() type: Type;
  typeMaxAmount: number;
  typeTracker: TypeTracker;

  constructor(private typeTrackerService: TypeTrackerService) { }

  ngOnInit() {
    this.infantsIncluded = this.family.infants ? true : false;
    this.schoolIncluded = this.family.schoolChildren > 0;
    this.setOnlyInfantProducts();
    this.setOnlySchoolProducts();
    this.setSubType();
    this.setSubTypePanelOpen();
    this.setSuperType();
    this.setProductTypes();
    this.setTypeMaxAmount();
    this.sortProductTypesByName();
    this.typeTrackerService.getTypeTrackers().subscribe(typeTrackers => {
      console.log(typeTrackers);
      // this.setTypeTracker(typeTrackers);
    });
  }

  closePanel() {
    this.panelOpenState = false;
  }

  setAtTypeMaxAmount() {
    this.typeTracker ? this.atTypeMaxAmount = this.typeTracker.atTypeMaxAmount : this.atTypeMaxAmount = false;
  }

  setOnlyInfantProducts() {
    let counter = 0;
    this.type.products.forEach(product => {
      if (product.infant) {
        counter ++;
      }
    });
    this.onlyInfantProducts = counter === this.type.products.length;
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
      this.subTypes = this.subTypes.filter(subType => subType.superTypeId === this.type._id);
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
      this.superType = {superTypeId: this.type._id, superTypeName: this.type.typeName};
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

  // setTypeTracker(typeTrackers: TypeTracker[]) {
  //   if (this.type.typeSizeAmount) {
  //     this.typeTracker ?
  //       this.typeTracker = typeTrackers.find(typeTracker => typeTracker._id === this.type._id) :
  //       this.typeTracker = {_id: this.type._id, atTypeMaxAmount: false, typeAmountInCart: 0};
  //     typeTrackers.some(typeTracker => typeTracker._id === this.type._id) ?
  //       this.typeTracker = typeTrackers.find(typeTracker => typeTracker._id === this.type._id) :
  //       this.typeTracker = {_id: this.type._id, atTypeMaxAmount: false, typeAmountInCart: 0};
  //   }
  //   console.log(this.typeTracker);
  // }

  sortProductTypesByName() {
    this.productTypes.sort((before, after) => {
      return before.typeName ?
        before.typeName > after.productName || before.productName > before.typeName
        || before.typeName > after.typeName ? 1 : -1
      :
        before.productName > after.productName ? 1 : -1;
    });
  }

  updateTypeAmount(addOne: boolean) {
    if (this.typeTracker) {
      if (!this.typeTracker.atTypeMaxAmount && addOne) {
        this.typeTracker.typeAmountInCart++;
      }
      if (this.typeTracker.typeAmountInCart !== 0 && !addOne) {
        this.typeTracker.typeAmountInCart--;
      }
      this.typeTracker.atTypeMaxAmount = this.typeTracker.typeAmountInCart === this.typeMaxAmount;
      this.atTypeMaxAmount = this.typeTracker.atTypeMaxAmount;
      this.typeTrackerService.updateTypeTrackers(this.typeTracker);
    }
  }
}
