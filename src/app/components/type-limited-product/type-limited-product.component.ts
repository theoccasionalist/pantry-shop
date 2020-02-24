import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LimitedProductComponent } from '../limited-product/limited-product.component';
import { CartService } from 'src/app/services/cart.service';
import { PointService } from 'src/app/services/point.service';
import { TypeTrackerService } from 'src/app/services/type-tracker.service';
import { TypeTracker } from 'src/app/models/type-tracker.model';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-type-limited-product',
  templateUrl: './type-limited-product.component.html',
  styleUrls: ['./type-limited-product.component.css']
})
export class TypeLimitedProductComponent extends LimitedProductComponent implements OnInit, OnDestroy {
  atTypeLimit: boolean;
  @Input() typeLimit: number;
  typeTracker: TypeTracker;

  constructor(protected cartService: CartService, protected pointService: PointService, protected typeTrackerService: TypeTrackerService) {
    super(cartService, pointService);
  }

  ngOnInit() {
    this.setLimit();
    this.setPoints();
    this.inCart = this.isProductInCart();
    this.subscription.add(
      combineLatest([
      this.pointService.getCurrentPoints(),
      this.typeTrackerService.getTypeTrackers()
      ]).subscribe(([currentPoints, typeTrackers]) => {
      this.currentPoints = currentPoints;
      this.typeTracker = typeTrackers.find((typeTracker: TypeTracker) => typeTracker.typeId === this.type._id);
      this.atTypeLimit = this.typeTracker.atTypeMaxAmount;
      this.updateTypeInCartAndBtn();
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addOneTypeLimitProduct() {
    this.addOneProduct();
    this.typeTracker.typeAmountInCart++;
    this.typeTracker.atTypeMaxAmount = this.isAtTypeLimit();
    this.typeTrackerService.updateTypeTrackers(this.typeTracker);
  }

  isAtTypeLimit() {
    return this.typeTracker.typeAmountInCart === this.typeLimit;
  }

  subtractOneTypeLimitProduct() {
    if (this.typeTracker.typeAmountInCart > 0) {
      this.subtractOneProduct();
      this.typeTracker.typeAmountInCart--;
      this.typeTracker.atTypeMaxAmount = this.isAtTypeLimit();
      this.typeTrackerService.updateTypeTrackers(this.typeTracker);
    }
  }

  updateTypeInCartAndBtn() {
    this.amountInCart = this.getAmountInCart();
    this.addBtnDisabled = this.atTypeLimit || !this.isProductUnderLimit() || !this.hasEnoughPoints();
  }

}
