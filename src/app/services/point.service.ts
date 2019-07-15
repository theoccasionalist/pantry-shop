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
      this.pointSource.next(10);
    }
    if (family.familySize === 3 || family.familySize === 4) {
      this.pointSource.next(20);
    }
    if (family.familySize === 5 || family.familySize === 6) {
      this.pointSource.next(25);
    }
    if (family.familySize === 7 || family.familySize === 8) {
      this.pointSource.next(30);
    }
    if (family.familySize === 9) {
      this.pointSource.next(35);
    }
  }

  getMaxPoints() {
    const family = this.familyService.getFamily();
    if (family.familySize === 1 || family.familySize === 2 ) {
      return 10;
    }
    if (family.familySize === 3 || family.familySize === 4) {
      return 20;
    }
    if (family.familySize === 5 || family.familySize === 6) {
      return 25;
    }
    if (family.familySize === 7 || family.familySize === 8) {
      return 30;
    }
    if (family.familySize === 9) {
      return 35;
    }
  }

  updatePoints(remainingPoints: number) {
    this.pointSource.next(remainingPoints);
  }
}
