import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FamilyService } from 'src/app/services/family.service';
import { Family } from 'src/app/models/family.model';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { PointService } from 'src/app/services/point.service';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { TypeService } from 'src/app/services/type.service';
import { Router } from '@angular/router';
import { FamilyComponent } from '../family/family.component';
import { PickUpDateService } from 'src/app/services/pick-up-date.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent extends FamilyComponent implements OnInit {
  currentPickUpDate: string;

  constructor(protected cartService: CartService, public dialogRef: MatDialogRef<UpdateModalComponent>,
              protected familyService: FamilyService, @Inject (MAT_DIALOG_DATA) public modal: string,
              protected pickUpDateService: PickUpDateService, protected pointService: PointService, private snackBar: MatSnackBar,
              protected router: Router, protected typeService: TypeService
              ) {
                super(cartService, familyService, pickUpDateService, pointService, router, typeService);
              }

  ngOnInit() {
    this.familyService.getFamily().subscribe(family => {
      this.family = family;
      this.contactForm = new FormGroup({
        firstName: new FormControl(this.family.firstName, Validators.required),
        lastName: new FormControl(this.family.lastName, Validators.required),
        zipCode: new FormControl(this.family.zipCode, [Validators.required, Validators.pattern(/^[0-9]{5}$/)]),
        phoneNumber: new FormControl(this.family.phoneNumber, [Validators.required,
          Validators.pattern(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/)]),
        emailAddress: new FormControl(this.family.emailAddress, Validators.email),
      });
      this.householdForm = new FormGroup({
        familySize: new FormControl(this.family.familySize, Validators.required),
        schoolChildren: new FormControl(this.family.schoolChildren, Validators.required),
        infants: new FormControl(this.family.infants, Validators.required),
      });
      this.pickUpForm = new FormGroup({
        referral: new FormControl(this.family.referral, Validators.required),
        pickUpDate: new FormControl(this.family.pickUpDate, Validators.required)
      });
      this.setPickUpDateOptions(this.family.referral);
      this.pickUpForm.get('pickUpDate').setValue(this.family.pickUpDate);
    });
    this.pointService.getPointsMapping().subscribe(pointsMapping => this.pointsMapping = pointsMapping);
  }

  getPickUp() {
    this.pickUpDateOptions.find(pickUpDate => this.family.pickUpDate === pickUpDate);
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
      this.initCart();
      console.log(this.family);
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

  // private setContactInfo() {
  //   this.family.firstName =     this.family.firstName = this.contactForm.get('firstName').value;
  //   this.family.lastName = this.contactForm.get('lastName').value;
  //   this.family.phoneNumber = this.contactForm.get('phoneNumber').value;
  //   this.family.zipCode = this.contactForm.get('zipCode').value;
  //   if (this.contactForm.get('emailAddress').value) {
  //     this.family.emailAddress = this.contactForm.get('emailAddress').value;
  //   }
  // }

  // private setHouseholdInfo() {
  //   this.family.familySize = this.householdForm.get('familySize').value;
  //   this.family.schoolChildren = this.householdForm.get('schoolChildren').value;
  //   this.family.infants = this.householdForm.get('infants').value;
  // }

  // private setPickUpInfo() {
  //   this.family.referral = this.pickUpForm.get('referral').value;
  //   this.family.pickUpDate = this.pickUpForm.get('pickUpDate').value;
  // }
}
