import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Type } from 'src/app/models/type.model';
import { Family } from 'src/app/models/family.model';
import { Product } from 'src/app/models/product.model';
import { CartItemsByType } from 'src/app/models/cart-items-by-type.model';
import { PointService } from 'src/app/services/point.service';
import { Subscription } from 'rxjs';
import { TypeProduct } from 'src/app/models/type-product.model';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit, OnDestroy {
  allPointsUsed: boolean;
  @Input() allSubTypes: Type[];
  @Input() cart: CartItemsByType[];
  currentPoints: number;
  @Input() family: Family;
  hasPoints: boolean;
  infantsIncluded: boolean;
  infantType: boolean;
  loading = true;
  panelOpenState = false;
  products: TypeProduct[] = [];
  schoolIncluded: boolean;
  schoolType: boolean;
  subscription: Subscription = new Subscription();
  subTypes: Type[];
  @Input() type: Type;
  subTypeComments: string[] = [];

  constructor(protected pointService: PointService) { }

  ngOnInit() {
    this.setProducts();
    this.sortProductsByName();
    this.setInfant();
    this.setSchool();
    this.setHasPoints();
    this.setSubTypeComments();
    this.subscription.add(
      this.pointService.getCurrentPoints().subscribe((currentPoints: number) => {
      this.currentPoints = currentPoints;
      this.allPointsUsed = this.currentPoints <= 0;
    }));
    this.loading = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closePanel() {
    this.panelOpenState = false;
  }

  setHasPoints() {
    this.hasPoints = this.products.some((product: Product) => product.points);
  }

  setInfant() {
    this.infantsIncluded = this.family.infants > 0;
    this.infantType = !this.type.products.some((product: Product) => !product.infant);
  }

  setProducts() {
    this.type.products.forEach((product: Product) => {
      this.setProductsForFamilySize(product);
    });
    this.allSubTypes.forEach((subType: Type) => {
      if (this.type._id === subType.superTypeId) {
        subType.products.forEach((subTypeProduct: TypeProduct) => {
          subTypeProduct.typeId = subType._id;
          subTypeProduct.typeName = subType.typeName;
          subTypeProduct.typeComment = subType.typeComment;
          subTypeProduct.typeLimits = subType.typeLimits;
          this.setProductsForFamilySize(subTypeProduct);
        });
      }
    });
  }

  setProductsForFamilySize(product: Product) {
    let familyValue: number = this.family.familySize;
    if (product.infant) {
      familyValue = this.family.infants;
    } else if (product.school) {
      familyValue = this.family.schoolChildren;
    }
    if (product.prodSizeAmount) {
      product.prodSizeAmount.forEach(mapping => {
        if (mapping.minFamSize <= familyValue  && familyValue <= mapping.maxFamSize) {
            this.products.push(product);
        }
      });
    } else {
      this.products.push(product);
    }
  }

  setSchool() {
    this.schoolIncluded = this.family.schoolChildren > 0;
    this.schoolType = !this.type.products.some((product: Product) => !product.school);
  }

  setSubTypeComments() {
    this.allSubTypes.forEach((subType: Type) => {
      if (this.type._id === subType.superTypeId && subType.typeComment) {
        this.subTypeComments.push(subType.typeComment);
      }
    });
  }

  sortProductsByName() {
    this.products.sort(
      (before, after) => before.productName.trim().toLowerCase() > after.productName.trim().toLowerCase() ? 1 : -1);
  }
}
