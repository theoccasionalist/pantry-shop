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
    this.familyService.getFamily().subscribe(currentFamily => this.family = currentFamily);
    if (this.family.familySize === 1 || this.family.familySize === 2 ) {
      this.maxPoints = 10;
      this.pointSource.next(10);
    }
    if (this.family.familySize === 3 || this.family.familySize === 4) {
      this.maxPoints = 20;
      this.pointSource.next(20);
    }
    if (this.family.familySize === 5 || this.family.familySize === 6) {
      this.maxPoints = 25;
      this.pointSource.next(25);
    }
    if (this.family.familySize === 7 || this.family.familySize === 8) {
      this.maxPoints = 30;
      this.pointSource.next(30);
    }
    if (this.family.familySize === 9) {
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
