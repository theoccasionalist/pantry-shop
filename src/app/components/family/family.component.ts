import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Family } from '../../models/family.model';
import { FamilyService } from '../../services/family.service';
import { PointService } from 'src/app/services/point.service';
import { TypeTrackerService } from 'src/app/services/type-tracker.service';
import { TypeTracker } from 'src/app/models/type-tracker.model';
import { PickUpDateService } from 'src/app/services/pick-up-date.service';
import { CartItemsByType } from 'src/app/models/cart-items-by-type.model';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class FamilyComponent implements OnInit {
  cart: CartItemsByType[];
  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    zipCode: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/)]),
    emailAddress: new FormControl('', Validators.email),
  });
  family: Family;
  familyPanelCloseState = true;
  isCompleted = false;
  householdForm = new FormGroup({
    familySize: new FormControl('', Validators.required),
    schoolChildren: new FormControl('', Validators.required),
    infants: new FormControl('', Validators.required),
  });
  logOutClicked: boolean;
  pickUpForm = new FormGroup({
    referral: new FormControl('', Validators.required),
    pickUpDate: new FormControl('', Validators.required)
  });
  pickUpDateOptions: string[];
  pointsMapping: [{minSize: number, maxSize: number, points: number}];
  typeTrackers: TypeTracker[] = [];
  requiredError = 'This field is required.';

  constructor(protected authService: AuthService, protected cartService: CartService, protected familyService: FamilyService,
              protected pickUpDateService: PickUpDateService, protected pointService: PointService, protected router: Router,
              protected typeTrackerService: TypeTrackerService) {}

  ngOnInit() {
    this.familyService.resetFamily();
    this.cartService.resetCart();
    this.pickUpDateService.resetPickUpDate();
    this.pointService.setMaxPoints(0);
    this.pointService.updatePoints(0);
    this.typeTrackerService.resetTypeTrackers();
    forkJoin(
      this.authService.getLogOutClicked().pipe(
        tap((logOutClicked: boolean) => this.logOutClicked = logOutClicked)
      ),
      this.familyService.getFamily().pipe(
        tap((family: Family) => this.family = family)
      ),
      this.pointService.getPointsMapping().pipe(
        tap(pointsMapping => this.pointsMapping = pointsMapping)
      )
    ).subscribe();
  }

  initPoints(familySize: number) {
    this.pointsMapping.forEach(mapping => {
      if (mapping.minSize <= familySize && familySize <= mapping.maxSize) {
        this.pointService.setMaxPoints(mapping.points);
        this.pointService.updatePoints(mapping.points);
      }
    });
  }

  setContactInfo() {
    this.family.firstName = this.family.firstName = this.contactForm.get('firstName').value;
    this.family.lastName = this.contactForm.get('lastName').value;
    this.family.phoneNumber = this.contactForm.get('phoneNumber').value;
    this.family.zipCode = this.contactForm.get('zipCode').value;
    if (this.contactForm.get('emailAddress').value) {
      this.family.emailAddress = this.contactForm.get('emailAddress').value;
    }
  }

  setHouseholdInfo() {
    this.family.familySize = this.householdForm.get('familySize').value;
    this.family.schoolChildren = this.householdForm.get('schoolChildren').value;
    this.family.infants = this.householdForm.get('infants').value;
  }

  setPickUpInfo() {
    this.family.referral = this.pickUpForm.get('referral').value;
    this.pickUpDateService.updatePickUpDate(this.pickUpForm.get('pickUpDate').value);
  }

  setPickUpDateOptions(referral: boolean) {
    this.pickUpForm.controls.pickUpDate.reset();
    this.pickUpDateOptions = this.pickUpDateService.getPickUpDateOptions(referral);
  }

  onShopClick() {
    if (this.contactForm.valid && this.householdForm.valid && this.pickUpForm.valid) {
      this.setContactInfo();
      this.setHouseholdInfo();
      this.setPickUpInfo();
      this.familyService.updateFamily(this.family);
      this.initPoints(this.family.familySize);
      this.router.navigate([`/shop`]);
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (!this.logOutClicked) {
      $event.returnValue = true;
    }
  }
}
