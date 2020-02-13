import { Component, OnInit, OnDestroy } from '@angular/core';
import { TypeComponent } from '../type/type.component';
import { TypeTracker } from 'src/app/models/type-tracker.model';
import { TypeTrackerService } from 'src/app/services/type-tracker.service';
import { PointService } from 'src/app/services/point.service';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-limited-type',
  templateUrl: './limited-type.component.html',
  styleUrls: ['./limited-type.component.css']
})
export class LimitedTypeComponent extends TypeComponent implements OnInit, OnDestroy {
  typeLimit: number;
  typeAmountInCart: number;
  typeTracker: TypeTracker;


  constructor(protected pointService: PointService, private typeTrackerService: TypeTrackerService) {
    super(pointService);
  }

  ngOnInit() {
    this.setProducts();
    this.sortProductsByName();
    this.setInfant();
    this.setSchool();
    this.setHasPoints();
    this.setTypeLimit();
    this.typeTrackerService.addTypeTracker(this.type._id);
    this.subscription.add(
      combineLatest(
      this.pointService.getCurrentPoints(),
      this.typeTrackerService.getTypeTrackers()
    ).subscribe(([currentPoints, typeTrackers]) => {
      this.currentPoints = currentPoints;
      this.typeTracker = typeTrackers.find((typeTracker: TypeTracker) => typeTracker.typeId = this.type._id);
      console.log(this.typeTracker);
      this.typeAmountInCart = this.typeTracker.typeAmountInCart;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setTypeLimit() {
    let familyValue: number;
    this.schoolType ? familyValue = this.family.schoolChildren : familyValue = this.family.familySize;
    this.type.typeSizeAmount.forEach(mapping => {
      if (mapping.minFamSize <= familyValue && familyValue <= mapping.maxFamSize) {
        this.typeLimit = mapping.maxAmount;
      }
    });
  }
}
