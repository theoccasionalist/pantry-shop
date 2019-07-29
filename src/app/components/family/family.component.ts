import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Family } from '../../models/family.model';
import { FamilyService } from '../../services/family.service';
import { PointService } from 'src/app/services/point.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  family: Family;
  familyForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    birthDate: new FormControl(''),
    address: new FormControl(''),
    zipCode: new FormControl(''),
    emailAddress: new FormControl(''),
    phoneNumber: new FormControl(''),
    familySize: new FormControl('', [Validators.required]),
    schoolChildren: new FormControl('', [Validators.required])
  });
  familyPanelCloseState = true;
  minDate = new Date(1900, 0);
  maxDate = new Date(2015, 11, 31);
  startDate = new Date(2000, 0);

  constructor(private cartService: CartService, private familyService: FamilyService,
              private pointService: PointService, private router: Router) {}

  ngOnInit() {
    this.familyService.getFamily().subscribe(currentFamily => this.family = currentFamily);
    console.log(this.family);
  }

  onGoShoppingClick() {
    this.family = this.familyForm.value;
    if (this.familyForm.valid) {
      this.familyService.updateFamily(this.family);
      this.pointService.initPoints();
      this.cartService.resetCart();
      this.router.navigate([`/shop`]);
      console.log(this.familyForm.value, this.family);
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }
}
