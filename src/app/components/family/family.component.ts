import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Family } from '../../models/family.model';
import { FamilyService } from '../../services/family.service';
import { PointService } from 'src/app/services/point.service';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  cart: Cart;
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
  pointsMapping: [{minSize: number, maxSize: number, points: number}];
  startDate = new Date(2000, 0);

  constructor(private cartService: CartService, private familyService: FamilyService,
              private pointService: PointService, private router: Router) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(currentCart => this.cart = currentCart);
    this.familyService.getFamily().subscribe(currentFamily => this.family = currentFamily);
    this.pointService.getPointsMapping().subscribe(pointsMapping => this.pointsMapping = pointsMapping);
  }

  onGoShoppingClick() {
    this.family = this.familyForm.value;
    if (this.familyForm.valid) {
      this.familyService.updateFamily(this.family);
      this.initPoints(this.family.familySize);
      this.initCart(this.family.lastName);
      this.router.navigate([`/shop`]);
    }
  }

  private initCart(familyName: string) {
    this.cart.familyName = familyName;
    this.cart.items = [];
    this.cartService.updateCart(this.cart);
  }

  private initPoints(familySize: number) {
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
