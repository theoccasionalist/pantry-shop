import { Component, OnInit, OnDestroy } from '@angular/core';
import { TypeComponent } from '../type/type.component';
import { TypeTracker } from 'src/app/models/type-tracker.model';
import { TypeTrackerService } from 'src/app/services/type-tracker.service';
import { PointService } from 'src/app/services/point.service';
import { combineLatest} from 'rxjs';

@Component({
  selector: 'app-limited-type',
  templateUrl: './limited-type.component.html',
  styleUrls: ['./limited-type.component.css']
})
export class LimitedTypeComponent extends TypeComponent implements OnInit, OnDestroy {
  atTypeLimit: boolean;
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
    this.setSubTypeComments();
    if (this.type.typeLimits.enableTypeTracking) {
      this.typeTrackerService.addTypeTracker(this.type._id);
    }
    this.subscription.add(
      combineLatest([
      this.pointService.getCurrentPoints(),
      this.typeTrackerService.getTypeTrackers()
      ]).subscribe(([currentPoints, typeTrackers]) => {
      this.currentPoints = currentPoints;
      this.allPointsUsed = this.currentPoints <= 0;
      if (this.type.typeLimits.enableTypeTracking) {
        this.typeTracker = typeTrackers.find((typeTracker: TypeTracker) => typeTracker.typeId === this.type._id);
        this.typeAmountInCart = this.typeTracker.typeAmountInCart;
        this.atTypeLimit = this.typeTracker.atTypeMaxAmount;
      }
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setTypeLimit() {
    let familyValue: number = this.family.familySize;
    if (this.infantType) {
      familyValue = this.family.infants;
    } else if (this.schoolType) {
      familyValue = this.family.schoolChildren;
    }
    this.type.typeLimits.typeSizeAmount.forEach(mapping => {
      if (mapping.minFamSize <= familyValue && familyValue <= mapping.maxFamSize) {
        this.typeLimit = mapping.maxAmount;
      }
    });
  }
}
