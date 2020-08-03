import { Component, OnInit, OnDestroy } from '@angular/core';
import { TypeLimitedProductComponent } from '../type-limited-product/type-limited-product.component';
import { CartService } from 'src/app/services/cart.service';
import { PointService } from 'src/app/services/point.service';
import { TypeTrackerService } from 'src/app/services/type-tracker.service';
import { combineLatest } from 'rxjs';
import { TypeTracker } from 'src/app/models/type-tracker.model';

@Component({
  selector: 'app-sub-type-product',
  templateUrl: './sub-type-product.component.html',
  styleUrls: ['./sub-type-product.component.css']
})
export class SubTypeProductComponent extends TypeLimitedProductComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  typeAmountInCart: number;
  typeId: string;
  typeLimit: number;
  typeName: string;
  typeLimits: any;
  typeSizeAmount: any;
  typeTracker: TypeTracker;

  constructor(protected cartService: CartService, protected pointService: PointService, protected typeTrackerService: TypeTrackerService) {
    super(cartService, pointService, typeTrackerService);
  }

  ngOnInit() {
    this.typeId = this.product.typeId;
    this.typeName = this.product.typeName;
    this.typeLimits = this.product.typeLimits;
    this.setLimit();
    this.setPoints();
    this.setTypeLimit();
    this.inCart = this.isProductInCart();
    this.typeTrackerService.addTypeTracker(this.typeId);
    this.subscription.add(
      combineLatest([
      this.pointService.getCurrentPoints(),
      this.typeTrackerService.getTypeTrackers()
      ]).subscribe(([currentPoints, typeTrackers]) => {
      this.currentPoints = currentPoints;
      this.amountInCart = this.getAmountInCart();
      this.typeTracker = typeTrackers.find((typeTracker: TypeTracker) => typeTracker.typeId === this.typeId);
      this.atTypeLimit = this.typeTracker.atTypeMaxAmount;
      this.typeAmountInCart = this.typeTracker.typeAmountInCart;
      this.updateAddBtn();
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setTypeLimit() {
    const familyValue = this.family.familySize;
    this.typeLimits.typeSizeAmount.forEach(mapping => {
      if (mapping.minFamSize <= familyValue && familyValue <= mapping.maxFamSize) {
        this.typeLimit = mapping.maxAmount;
      }
    });
  }
}
