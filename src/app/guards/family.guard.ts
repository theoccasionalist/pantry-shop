import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { FamilyService } from '../services/family.service';
import { Family } from '../models/family.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyGuard implements CanActivate  {

  constructor(private familyService: FamilyService, private router: Router) {
  }

  canActivate(): boolean | UrlTree {
    const family: Family = this.familyService.getFamily();
    return !family.familySize ? this.router.parseUrl('/family') : true;
  }
}
