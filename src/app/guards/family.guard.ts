import {Location} from '@angular/common';
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router, CanDeactivate } from '@angular/router';
import { FamilyService } from '../services/family.service';
import { Family } from '../models/family.model';
import { ShopComponent } from '../components/shop/shop.component';

@Injectable({
  providedIn: 'root'
})
export class FamilyGuard implements CanActivate {
  family: Family;

  constructor(private familyService: FamilyService, private router: Router) {
  }

  canActivate(): boolean | UrlTree {
    this.familyService.getFamily().subscribe((family: Family) => {
      this.family = family;
    });
    return this.hasFamilyCheck() ?  true : this.router.parseUrl('/family');
  }

  private hasFamilyCheck() {
    const familyValues = Object.values(this.family);
    const nullValues = familyValues.filter(familyValue => familyValue === null);
    return !nullValues.length;
  }
}
