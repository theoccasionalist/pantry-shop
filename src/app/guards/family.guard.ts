import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { FamilyService } from '../services/family.service';
import { Family } from '../models/family.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyGuard implements CanActivate  {
  family: Family;

  constructor(private familyService: FamilyService, private router: Router) {
  }

  canActivate(): boolean | UrlTree {
    this.familyService.getFamily().subscribe(currentFamily => this.family = currentFamily);
    return !this.family.familySize ? this.router.parseUrl('/family') : true;
  }
}
