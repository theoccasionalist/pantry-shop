import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Family } from '../../models/family.model';
import { FamilyService } from '../../services/family.service';
import { PointService } from 'src/app/services/point.service';
import { Cart } from 'src/app/models/cart.model';
import { TypeService } from 'src/app/services/type.service';
import { TypeTracker } from 'src/app/models/type-tracker.model';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  cart: Cart = {
    cartItemsByType: []
  };
  family: Family;
  familyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    zipCode: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]),
    emailAddress: new FormControl('', Validators.email),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/)]),
    familySize: new FormControl('', Validators.required),
    schoolChildren: new FormControl('', Validators.required),
    infants: new FormControl('', Validators.required),
    referral: new FormControl('', Validators.required)
  });
  familyPanelCloseState = true;
  pointsMapping: [{minSize: number, maxSize: number, points: number}];
  typeTrackers: TypeTracker[] = [];
  requiredError = 'This field is required.';

  constructor(private cartService: CartService, private familyService: FamilyService,
              private pointService: PointService, private typeService: TypeService, private router: Router) {}

  ngOnInit() {
    this.familyService.resetFamily();
    this.pointService.getPointsMapping().subscribe(pointsMapping => this.pointsMapping = pointsMapping);
  }

  onNextClick(): void {
    if (this.familyForm.valid) {
      this.family = this.familyForm.value;
      this.familyService.updateFamily(this.family);
      this.initPoints(this.family.familySize);
      this.initCart();
      this.router.navigate([`/pick-up`]);
    }
  }

  private initCart(): void {
    this.cart.cartItemsByType = [];
    this.cartService.updateCart(this.cart);
    this.typeService.resetTypeTracker();
  }

  private initPoints(familySize: number): void {
    this.pointsMapping.forEach(mapping => {
      if (mapping.minSize <= familySize && familySize <= mapping.maxSize) {
        this.pointService.setMaxPoints(mapping.points);
        this.pointService.updatePoints(mapping.points);
      }
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }
}
