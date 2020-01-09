import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Family } from '../../models/family.model';
import { FamilyService} from '../../services/family.service';
import { PointService } from '../../services/point.service';
import { ShopService } from 'src/app/services/shop.service';
import { Type } from 'src/app/models/type.model';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  currentPoints: number;
  family: Family;
  logOutClicked: boolean;
  maxPoints: number;
  subTypes: Type[] = [];
  types: Type[] = [];

  constructor(private authService: AuthService, private familyService: FamilyService, private pointService: PointService,
              private shopService: ShopService, private router: Router) { }

  ngOnInit() {
    forkJoin(
      this.authService.getLogOutClicked().pipe(
        tap((logOutClicked: boolean) => this.logOutClicked = logOutClicked)
      ),
      this.familyService.getFamily().pipe(
        tap((family: Family) => this.family = family)
      ),
      this.pointService.getCurrentPoints().pipe(
        tap(currentPoints => {
          this.currentPoints = currentPoints;
          this.maxPoints = this.pointService.maxPoints;
        })
      ),
      this.shopService.getShop().pipe(
        tap((types: Type[]) => {
          this.setTypes(types);
          this.sortTypesByName();
        })
      )
    ).subscribe();
  }

  onReviewOrderClick() {
    this.router.navigate([`/cart`]);
  }

  private setTypes(types: Type[]) {
    types.forEach((type) => {
      type.superTypeId ? this.subTypes.push(type) : this.types.push(type);
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
