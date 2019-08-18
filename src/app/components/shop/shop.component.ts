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
  singlesTypes: string[] = [];
  currentPoints: number;
  family: Family;
  maxPoints: number;

  constructor(private cartService: CartService, private familyService: FamilyService,
              private pointService: PointService, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.familyService.getFamily().subscribe(currentFamily => this.family = currentFamily);
    this.pointService.getCurrentPoints().subscribe(currentPoints => this.currentPoints = currentPoints);
    this.maxPoints = this.pointService.maxPoints;
    this.productService.getProducts().subscribe((response: Product[]) => {
      response.forEach((product: Product) => {
        if (!product.multiple  && !this.singlesTypes.includes(product.type)) {
          this.singlesTypes.push(product.type);
      }});
    });
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
