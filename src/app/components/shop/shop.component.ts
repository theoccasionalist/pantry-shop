import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Family } from '../../models/family.model';
import { FamilyService} from '../../services/family.service';
import { ShopService } from 'src/app/services/shop.service';
import { Type } from 'src/app/models/type.model';
import { forkJoin, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItemsByType } from 'src/app/models/cart-items-by-type.model';

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
  logOutClicked: boolean;
  limitedTypes: Type[] = [];
  nonLimitedTypes: Type[] = [];
  private subscription = new Subscription();
  types: Type[] = [];

  constructor(private authService: AuthService, private cartService: CartService, private familyService: FamilyService,
              private shopService: ShopService, private router: Router) { }

  ngOnInit() {
    this.subscription.add(forkJoin(
      this.authService.getLogOutClicked().pipe(
        tap((logOutClicked: boolean) => this.logOutClicked = logOutClicked)
      ),
      this.cartService.getCart().pipe(
        tap((cart: CartItemsByType[]) => this.cart = cart)
      ),
      this.familyService.getFamily().pipe(
        tap((family: Family) => this.family = family)
      ),
      this.shopService.getShop().pipe(
        tap((types: Type[]) => {
          this.types = types;
          this.setTypes();
          this.sortTypesByName();
        }))
      ).subscribe()
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
      if (!type.superTypeId && type.typeSizeAmount) {
        this.limitedTypes.push(type);
      }
      if (!type.superTypeId && !type.typeSizeAmount) {
        this.nonLimitedTypes.push(type);
      }
      if (type.superTypeId) {
        this.allSubTypes.push(type);
      }
    });
  }

  // private setTypes(types: Type[]) {
  //   types.forEach((type) => {
  //     type.superTypeId ? this.subTypes.push(type) : this.types.push(type);
  //   });
  // }

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
