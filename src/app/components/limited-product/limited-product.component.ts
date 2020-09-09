import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseProductComponent } from '../base-product/base-product.component';
import { CartService } from 'src/app/services/cart.service';
import { PointService } from 'src/app/services/point.service';

@Component({
  selector: 'app-limited-product',
  templateUrl: './limited-product.component.html',
  styleUrls: ['./limited-product.component.css']
})
export class LimitedProductComponent extends BaseProductComponent implements OnInit, OnDestroy {
  addBtnDisabled: boolean;
  currentPoints: number;
  limit: number;
  points: number;

  constructor(protected cartService: CartService, protected pointService: PointService) {
    super(cartService);
  }

  ngOnInit() {
    this.setLimit();
    this.setPoints();
    this.inCart = this.isProductInCart();
    this.subscription.add(
      this.pointService.getCurrentPoints().subscribe(currentPoints => {
      this.currentPoints = currentPoints;
      this.updateInCartAndBtn();
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addPoints() {
    if (this.product.points) {
      this.currentPoints = this.currentPoints + this.product.points;
      this.pointService.updatePoints(this.currentPoints);
    }
  }

  addOneProduct() {
    this.isProductInCart() ? this.addOneToCart() : this.addProductToCart();
    this.removePoints();
    if (!this.product.points) {
      this.updateInCartAndBtn();
    }
  }

  hasEnoughPoints() {
    if (this.product.points) {
      return this.currentPoints >= this.product.points;
    } else {
      return true;
    }
  }

  isProductUnderLimit() {
    if (this.product.prodSizeAmount) {
      return this.getAmountInCart() < this.limit;
    } else {
      return true;
    }
  }

  subtractOneProduct() {
    this.getAmountInCart() >  1 ? this.subtractOneFromCart() : this.removeProductFromCart();
    this.addPoints();
    if (!this.product.points) {
      this.updateInCartAndBtn();
    }
  }

  removePoints() {
    if (this.product.points) {
      this.currentPoints = this.currentPoints - this.product.points;
      this.pointService.updatePoints(this.currentPoints);
    }
  }

  setLimit() {
    if (this.product.prodSizeAmount) {
      let familyValue: number = this.family.familySize;
      if (this.product.infant) {
        familyValue = this.family.infants;
      } else if (this.product.school) {
        familyValue = this.family.schoolChildren;
      }
      this.product.prodSizeAmount.forEach(mapping => {
          if (mapping.minFamSize <= familyValue && familyValue <= mapping.maxFamSize) {
          this.limit = mapping.maxAmount;
          }
      });
    }
  }

  setPoints() {
    if (this.product.points) {
      this.points = this.product.points;
    }
  }

  updateInCartAndBtn() {
    this.amountInCart = this.getAmountInCart();
    this.addBtnDisabled = !this.isProductUnderLimit() || !this.hasEnoughPoints();
  }
}
