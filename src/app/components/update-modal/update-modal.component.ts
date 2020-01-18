import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FamilyService } from 'src/app/services/family.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PointService } from 'src/app/services/point.service';
import { CartService } from 'src/app/services/cart.service';
import { TypeTrackerService } from 'src/app/services/type-tracker.service';
import { Router } from '@angular/router';
import { FamilyComponent } from '../family/family.component';
import { PickUpDateService } from 'src/app/services/pick-up-date.service';
import { forkJoin } from 'rxjs';
import { Family } from 'src/app/models/family.model';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent extends FamilyComponent implements OnInit {
  loading = true;
  pickUpDate: string;

  constructor(protected authService: AuthService, protected cartService: CartService, public dialogRef: MatDialogRef<UpdateModalComponent>,
              protected familyService: FamilyService, @Inject (MAT_DIALOG_DATA) public data: any,
              protected pickUpDateService: PickUpDateService, protected pointService: PointService, private snackBar: MatSnackBar,
              protected router: Router, protected typeTrackerService: TypeTrackerService
              ) {
                super(authService, cartService, familyService, pickUpDateService, pointService, router, typeTrackerService);
              }

  ngOnInit() {
    this.family = this.data.family;
    this.pickUpDate = this.data.pickUpDate;
    this.setContactModal();
    this.setHouseHoldModal();
    this.setPickUpModal();
    this.setPickUpDateOptions(this.family.referral);
    this.pickUpForm.get('pickUpDate').setValue(this.pickUpDate);
    this.pointService.getPointsMapping().subscribe(pointsMapping => this.pointsMapping = pointsMapping);
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onUpdateContactClick() {
    if (this.contactForm.valid) {
      this.setContactInfo();
      this.familyService.updateFamily(this.family);
      this.snackBar.open('Contact Information Updated', '', {
        duration: 2000,
      });
      this.dialogRef.close();
    }
  }

  onUpdateHouseholdClick() {
    if (this.householdForm.valid) {
      this.setHouseholdInfo();
      this.familyService.updateFamily(this.family);
      this.initPoints(this.family.familySize);
      this.cartService.resetCart();
      this.typeTrackerService.resetTypeTracker();
      this.dialogRef.close();
      this.snackBar.open('Household Information Updated and Cart Reset', '', {
        duration: 2000,
      });
      this.router.navigate([`/shop`]);
    }
  }

  onUpdatePickUpClick() {
    if (this.pickUpForm.valid) {
      this.setPickUpInfo();
      this.familyService.updateFamily(this.family);
      this.snackBar.open('Pick Up Information Updated', '', {
        duration: 2000,
      });
      this.dialogRef.close();
    }
  }

  setContactModal() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(this.family.firstName, Validators.required),
      lastName: new FormControl(this.family.lastName, Validators.required),
      zipCode: new FormControl(this.family.zipCode, [Validators.required, Validators.pattern(/^[0-9]{5}$/)]),
      phoneNumber: new FormControl(this.family.phoneNumber, [Validators.required,
        Validators.pattern(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/)]),
      emailAddress: new FormControl(this.family.emailAddress, Validators.email),
    });
  }

  setHouseHoldModal() {
    this.householdForm = new FormGroup({
      familySize: new FormControl(this.family.familySize, Validators.required),
      schoolChildren: new FormControl(this.family.schoolChildren, Validators.required),
      infants: new FormControl(this.family.infants, Validators.required),
    });
  }

  setPickUpModal() {
    this.pickUpForm = new FormGroup({
      referral: new FormControl(this.family.referral, Validators.required),
      pickUpDate: new FormControl(this.pickUpDate, Validators.required)
    });
  }
}
