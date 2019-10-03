import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Family } from '../models/family.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  family: Family = {
    firstName: null,
    lastName: null,
    zipcode: null,
    phoneNumber: null,
    familySize: null,
    schoolChildren: null,
    infants: null,
    referral: null
  };

  private familySource = new BehaviorSubject(this.family);
  currentFamily = this.familySource.asObservable();

  constructor() { }

  getFamily(): Observable<Family> {
    return this.currentFamily;
  }

  updateFamily(family: Family) {
    this.familySource.next(family);
  }
}
