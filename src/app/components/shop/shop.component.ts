import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Family } from '../../models/family.model';
import { FamilyService} from '../../services/family.service';
import { PointService } from '../../services/point.service';
import { ProductService } from 'src/app/services/product.service';
import { Type } from 'src/app/models/type.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  currentPoints: number;
  family: Family;
  maxPoints: number;
  subTypes: Type[] = [];
  types: Type[] = [];

  constructor(private familyService: FamilyService, private pointService: PointService,
              private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.familyService.getFamily().subscribe(currentFamily => this.family = currentFamily);
    this.maxPoints = this.pointService.maxPoints;
    this.pointService.getCurrentPoints().subscribe(currentPoints => this.currentPoints = currentPoints);
    this.productService.getProductsByTypes().subscribe((types: Type[]) => {
      this.setTypes(types);
      this.sortTypesByName();
      console.log(this.subTypes);
    });
  }

  onBackToFamilyClick() {
    this.router.navigate([`/family`]);
  }

  onReviewCartClick() {
    this.router.navigate([`/cart`]);
  }

  setTypes(types: Type[]) {
    types.forEach((type) => {
      type.superTypeId ? this.subTypes.push(type) : this.types.push(type);
    });
  }

  sortTypesByName() {
    this.types.sort((before, after) => before.typeName.trim().toLowerCase() > after.typeName.trim().toLowerCase() ? 1 : -1);
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }
}
