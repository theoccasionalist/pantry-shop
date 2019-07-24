import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { BulkProductComponent } from '../bulk-product/bulk-product.component';
import { AfterSchoolProductComponent } from '../after-school-product/after-school-product.component';
import { ChoiceProductComponent } from '../choice-product/choice-product.component';
import { CartCategoryItems } from '../../models/cart-category-items.model';
import { CartService } from '../../services/cart.service';
import { Family } from '../../models/family.model';
import { FamilyService} from '../../services/family.service';
import { PointService } from '../../services/point.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @ViewChild(BulkProductComponent, {static: false})
  bulkProductComponent: BulkProductComponent;
  @ViewChild(AfterSchoolProductComponent, {static: false})
  afterSchoolProductComponent: AfterSchoolProductComponent;
  @ViewChild(ChoiceProductComponent, {static: false})
  choiceProductComponent: ChoiceProductComponent;

  cart: CartCategoryItems[] = [];
  family: Family;
  remainingPoints: number;
  maxPoints: number;

  constructor(private cartService: CartService, private familyService: FamilyService,
              private pointService: PointService, private router: Router) { }

  ngOnInit() {
    this.family = this.familyService.getFamily();
    this.remainingPoints = this.pointService.getPoints();
    this.maxPoints = this.pointService.getMaxPoints();
  }

  receivePoints($event) {
    this.remainingPoints = $event;
  }

  isComponentCartPopulated(componentCart: any[]) {
    return componentCart.length !== 0;
  }

  updateShopComponentCart() {
    const bulk = this.bulkProductComponent.getBulkComponentCart();
    const choice = this.choiceProductComponent.getChoiceComponentCart();
    if (this.isComponentCartPopulated(bulk)) {
      this.cart.push({category: 'bulk products', items: this.bulkProductComponent.getBulkComponentCart()});
    }
    if (this.afterSchoolProductComponent) {
      const afterSchool = this.afterSchoolProductComponent.getAfterSchoolComponentCart();
      if (this.isComponentCartPopulated(afterSchool)) {
        this.cart.push({category: 'after school products', items: this.afterSchoolProductComponent.getAfterSchoolComponentCart()});
      }
    }
    if (this.isComponentCartPopulated(choice)) {
      this.cart.push({category: 'choice products', items: this.choiceProductComponent.getChoiceComponentCart()});
    }
  }

  onBackToFamilyClick() {
    this.router.navigate([`/family`]);
  }

  onReviewCartClick() {
    this.updateShopComponentCart();
    this.cartService.updateServiceCart(this.cart);
    this.router.navigate([`/cart`]);
    console.log(this.cart);
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }
}
