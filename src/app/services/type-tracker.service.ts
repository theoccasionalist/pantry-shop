import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TypeTracker } from '../models/type-tracker.model';

@Injectable({
  providedIn: 'root'
})
export class TypeTrackerService {

  constructor() { }

  typeTrackers: TypeTracker[] = [];

  private typeTrackerSource = new BehaviorSubject(this.typeTrackers);
  currentTypeTrackers = this.typeTrackerSource.asObservable();

  addTypeTracker(typeIdToAdd: string) {
    if (!this.typeTrackers.some((typeTracker: TypeTracker) => typeIdToAdd === typeTracker.typeId)) {
      this.typeTrackers.push({typeId: typeIdToAdd, atTypeMaxAmount: false, typeAmountInCart: 0});
      this.typeTrackerSource.next(this.typeTrackers);
    }
  }

  getTypeTrackers(): Observable<Array<TypeTracker>> {
    return this.currentTypeTrackers;
  }

  resetTypeTrackers() {
    this.typeTrackers = [];
    this.typeTrackerSource.next(this.typeTrackers);
  }

  updateTypeTrackers(componentTracker: TypeTracker) {
    const index = this.typeTrackers.findIndex((typeTracker: TypeTracker) => typeTracker.typeId === componentTracker.typeId);
    this.typeTrackers[index] = componentTracker;
    this.typeTrackerSource.next(this.typeTrackers);
  }
}
