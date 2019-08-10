import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { BulkProductComponent } from '../bulk-product/bulk-product.component';
import { AfterSchoolProductComponent } from '../after-school-product/after-school-product.component';
import { ChoiceProductComponent } from '../choice-product/choice-product.component';
import { MeatProductComponent } from '../meat-product/meat-product.component';
import { CartService } from '../../services/cart.service';
import { Family } from '../../models/family.model';
import { FamilyService} from '../../services/family.service';
import { PointService } from '../../services/point.service';
import { DairyProductComponent } from '../dairy-product/dairy-product.component';
import { RecipeComponent } from '../recipe/recipe.component';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @ViewChild(AfterSchoolProductComponent, {static: false})
  afterSchoolComponent: AfterSchoolProductComponent;
  @ViewChild(BulkProductComponent, {static: false})
  bulkComponent: BulkProductComponent;
  @ViewChild(ChoiceProductComponent, {static: false})
  choiceComponent: ChoiceProductComponent;
  @ViewChild(DairyProductComponent, {static: false})
  dairyComponent: DairyProductComponent;
  @ViewChild(MeatProductComponent, {static: false})
  meatComponent: MeatProductComponent;
  @ViewChild(RecipeComponent, {static: false})
  recipeComponent: RecipeComponent;

  cart: Cart = {
    categoryItems: [] = []
  };
  family: Family;
  maxPoints: number;
  remainingPoints: number;

  constructor(private cartService: CartService, private familyService: FamilyService,
              private pointService: PointService, private router: Router) { }

  ngOnInit() {
    this.familyService.getFamily().subscribe(currentFamily => this.family = currentFamily);
    this.maxPoints = this.pointService.getMaxPoints();
    this.remainingPoints = this.pointService.getPoints();
  }

  onBackToFamilyClick() {
    this.router.navigate([`/family`]);
  }

  onReviewCartClick() {
    this.updateCart();
    this.router.navigate([`/cart`]);
  }

  private updateCart() {
    const categoryItems = new Map([
      ['bulk', this.bulkComponent.getBulkComponentCart()],
      ['choice', this.choiceComponent.getChoiceComponentCart()],
      ['dairy', this.dairyComponent.getDairyComponentCart()],
      ['meat', this.meatComponent.getMeatComponentCart()],
      ['recipe' , this.recipeComponent.getRecipeComponentCart()]
    ]);
    if (this.afterSchoolComponent) {
        categoryItems.set(
          'afterSchool', this.afterSchoolComponent.getAfterSchoolComponentCart()
        );
    }
    categoryItems.forEach((value, key) => {
      if (value.length) {
        this.cart.categoryItems.push({
          category: key,
          items: value
        });
      }
    });
    this.cartService.updateCart(this.cart);
  }

  receivePoints($event) {
    this.remainingPoints = $event;
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }
}
