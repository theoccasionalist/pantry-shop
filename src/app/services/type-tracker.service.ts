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
  currentTypeTracker = this.typeTrackerSource.asObservable();

  getTypeTracker(): Observable<Array<TypeTracker>> {
    return this.currentTypeTracker;
  }

  resetTypeTracker(): void {
    const defaultTypeTrackers: TypeTracker[] = [];
    this.typeTrackerSource.next(defaultTypeTrackers);
  }

  updateTypeTracker(componentTracker: TypeTracker): void {
    this.typeTrackers = this.typeTrackers.filter(typeTracker => typeTracker._id !== componentTracker._id);
    this.typeTrackers.push(componentTracker);
    this.typeTrackerSource.next(this.typeTrackers);
  }
}
