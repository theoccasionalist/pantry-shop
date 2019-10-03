import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TypeTracker } from '../models/type-tracker.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor() { }

  typeTrackers: TypeTracker[] = [];

  private typeTrackerSource = new BehaviorSubject(this.typeTrackers);
  currentTypeTracker = this.typeTrackerSource.asObservable();

  getTypeTracker(): Observable<Array<TypeTracker>> {
    return this.currentTypeTracker;
  }

  resetTypeTracker(): void {
    this.typeTrackers = [];
    this.typeTrackerSource.next(this.typeTrackers);
  }

  updateTypeTracker(componentTracker: TypeTracker): void {
    this.typeTrackers = this.typeTrackers.filter(typeTracker => typeTracker.typeId !== componentTracker.typeId);
    this.typeTrackers.push(componentTracker);
    this.typeTrackerSource.next(this.typeTrackers);
  }
}
