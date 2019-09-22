import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PointService {
  points = 0;
  maxPoints = 0;
  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  private pointSource = new BehaviorSubject(this.points);
  currentPoints = this.pointSource.asObservable();

  getCurrentPoints(): Observable<number> {
    return this.currentPoints;
  }

  getPointsMapping() {
    return this.httpClient.get(`${this.uri}/points-mappings`).pipe(
      map(result => result[0].pointsMapping)
    );
  }

  setMaxPoints(maxPoints: number) {
    this.maxPoints = maxPoints;
  }

  updatePoints(currentPoints: number) {
    this.pointSource.next(currentPoints);
  }
}
