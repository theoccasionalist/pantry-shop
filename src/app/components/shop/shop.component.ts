import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
// import { MeatProductComponent } from '../meat-product/meat-product.component';
import { CartService } from '../../services/cart.service';
import { Family } from '../../models/family.model';
import { FamilyService} from '../../services/family.service';
import { PointService } from '../../services/point.service';
// import { Cart } from 'src/app/models/cart.model';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  currentPoints: number;
  family: Family;
  maxPoints: number;
  multiplesTypes: string[] = [];
  singlesTypes: string[] = [];
  totalTypes: string[] = [];

  constructor(private cartService: CartService, private familyService: FamilyService,
              private pointService: PointService, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.familyService.getFamily().subscribe(currentFamily => this.family = currentFamily);
    this.maxPoints = this.pointService.maxPoints;
    this.pointService.getCurrentPoints().subscribe(currentPoints => this.currentPoints = currentPoints);
    this.productService.getProducts().subscribe((response: Product[]) => {
      response.forEach((product: Product) => {
        this.initTypes(product);
      });
    });
  }

  initTypes(product: Product) {
    if (!this.totalTypes.includes(product.type)) {
      this.totalTypes.push(product.type);
      this.totalTypes.sort();
    }
  }

  onBackToFamilyClick() {
    this.router.navigate([`/family`]);
  }

  onReviewCartClick() {
    this.router.navigate([`/cart`]);
  }

  receivePoints($event) {
    this.currentPoints = $event;
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }
}
