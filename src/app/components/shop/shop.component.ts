import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Family } from '../../models/family.model';
import { FamilyService} from '../../services/family.service';
import { ShopService } from 'src/app/services/shop.service';
import { Type } from 'src/app/models/type.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItemsByType } from 'src/app/models/cart-items-by-type.model';
import { Subscription, combineLatest } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {
  allSubTypes: Type[] = [];
  cart: CartItemsByType[];
  currentPoints: number;
  family: Family;
  loading = true;
  logOutClicked: boolean;
  limitedTypes: Type[] = [];
  nonLimitedTypes: Type[] = [];
  subscription = new Subscription();
  types: Type[] = [];

  constructor(private authService: AuthService, private cartService: CartService, private familyService: FamilyService,
              private shopService: ShopService, private router: Router) { }

  ngOnInit() {
    this.subscription.add(
      combineLatest([
      this.authService.getLogOutClicked(),
      this.cartService.getCart(),
      this.familyService.getFamily(),
      this.shopService.getShop()
      ]).subscribe(([logOutClicked, cart, family, types]) => {
        this.logOutClicked = logOutClicked;
        this.cart = cart;
        this.family = family;
        this.types = types;
        this.setTypes();
        this.sortTypesByName();
        this.loading = false;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onReviewOrderClick() {
    this.router.navigate([`/order`]);
  }

  private setTypes() {
    this.types.forEach((type: Type) => {
      if (!type.superTypeId && type.typeLimits) {
        this.limitedTypes.push(type);
      }
      if (!type.superTypeId && !type.typeLimits) {
        this.nonLimitedTypes.push(type);
      }
      if (type.superTypeId) {
        this.allSubTypes.push(type);
      }
    });
  }

  private sortTypesByName() {
    this.types.sort((before, after) => before.typeName.trim().toLowerCase() > after.typeName.trim().toLowerCase() ? 1 : -1);
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (!this.logOutClicked) {
      $event.returnValue = true;
    }
  }
}
