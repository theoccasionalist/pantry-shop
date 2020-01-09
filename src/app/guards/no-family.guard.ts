import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Family } from '../models/family.model';
import { FamilyService } from '../services/family.service';

@Injectable({
  providedIn: 'root'
})
export class NoFamilyGuard implements CanActivate  {
  family: Family;

  constructor(private familyService: FamilyService) {
  }

  canActivate(): boolean {
    this.familyService.getFamily().subscribe((family: Family) => {
      this.family = family;
    });
    return this.hasNoFamilyCheck();
  }

  private hasNoFamilyCheck() {
    const familyValues = Object.values(this.family);
    const nullValues = familyValues.filter(familyValue => familyValue === null);
    return nullValues.length ? true : false;
  }
}
