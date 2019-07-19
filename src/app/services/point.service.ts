import { Injectable } from '@angular/core';
import { Family } from '../models/family.model';
import { FamilyService } from '../services/family.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointService {

  constructor(private familyService: FamilyService) { }

  points = 0;
  family: Family;
  maxPoints: number;

  private pointSource = new BehaviorSubject(this.points);
  currentPoints = this.pointSource.asObservable();

  getPoints() {
    let points;
    this.currentPoints.subscribe(curretPoints => points = curretPoints);
    return points;
  }

  initPoints() {
    const family = this.familyService.getFamily();
    if (family.familySize === 1 || family.familySize === 2 ) {
      this.maxPoints = 10;
      this.pointSource.next(10);
    }
    if (family.familySize === 3 || family.familySize === 4) {
      this.maxPoints = 20;
      this.pointSource.next(20);
    }
    if (family.familySize === 5 || family.familySize === 6) {
      this.maxPoints = 25;
      this.pointSource.next(25);
    }
    if (family.familySize === 7 || family.familySize === 8) {
      this.maxPoints = 30;
      this.pointSource.next(30);
    }
    if (family.familySize === 9) {
      this.maxPoints = 35;
      this.pointSource.next(35);
    }
  }

  getMaxPoints() {
    return this.maxPoints;
  }

  updatePoints(remainingPoints: number) {
    this.pointSource.next(remainingPoints);
  }
}
