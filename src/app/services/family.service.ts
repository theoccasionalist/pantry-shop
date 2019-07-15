import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Family } from '../models/family.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  defaultFamily: Family = {
    firstName: null,
    lastName: null,
    familySize: null,
    schoolChildren: null
  };

  private familySource = new BehaviorSubject(this.defaultFamily);
  currentFamily = this.familySource.asObservable();

  constructor() { }

  getFamily() {
    let family: Family;
    this.currentFamily.subscribe(currentFamily => family = currentFamily);
    return family;
  }

  updateFamily(family: Family) {
    this.familySource.next(family);
  }
}
