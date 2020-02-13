import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Family } from '../../models/family.model';
import { FamilyService } from '../../services/family.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { HttpClient } from '@angular/common/http';
import { CartItemsByType } from 'src/app/models/cart-items-by-type.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateModalComponent } from '../update-modal/update-modal.component';
import { PickUpDateService } from 'src/app/services/pick-up-date.service';
import { SubmitModalComponent } from '../submit-modal/submit-modal.component';
import { TypeTrackerService } from 'src/app/services/type-tracker.service';
import { PointService } from 'src/app/services/point.service';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartItemsByType[];
  cartPanelOpenState = false;
  cartTypes: any[] = [];
  columns: string[] = ['column1', 'column2'];
  contactPanelOpenState = false;
  family: Family;
  householdPanelOpenState = false;
  logOutClicked: boolean;
  MODAL_WIDTH = '35rem';
  orderReceived = false;
  pickUpDate: string;
  pickUpPanelOpenState = false;
  submitErrorCount = 0;
  uri = 'http://localhost:4000';

  constructor(private authService: AuthService, private cartService: CartService, private dialog: MatDialog,
              private familyService: FamilyService, private httpClient: HttpClient, private pickUpDateService: PickUpDateService,
              private pointService: PointService, private router: Router, private snackBar: MatSnackBar,
              private typeTrackerService: TypeTrackerService) { }

  ngOnInit() {
    forkJoin(
      this.authService.getLogOutClicked().pipe(
        tap((logOutClicked: boolean) => this.logOutClicked = logOutClicked)
      ),
      this.familyService.getFamily().pipe(
        tap((family: Family) => this.family = family)
      ),
      this.cartService.getCart().pipe(
        tap((cart: CartItemsByType[]) => {
          this.cart = cart;
          this.sortCart();
        })
      ),
      this.pickUpDateService.getPickUpDate().pipe(
        tap((pickUpDate: string) => this.pickUpDate = pickUpDate)
      )
    ).subscribe();
  }

  private clearSession() {
    this.cartService.resetCart();
    this.familyService.resetFamily();
    this.pickUpDateService.resetPickUpDate();
    this.pointService.setMaxPoints(0);
    this.pointService.updatePoints(0);
    this.typeTrackerService.resetTypeTrackers();
  }

  private createOrder() {
    const order = new Order();
    order.family = this.family;
    order.cart = this.cart;
    order.pickUpDate = this.pickUpDate;
    order.received = false;
    return order;
  }

  private sortCart() {
    this.cart.sort((before, after) => before.typeName.trim().toLowerCase() > after.typeName.trim().toLowerCase() ? 1 : -1);
    this.cart.forEach(type => {
      type.products.sort((before, after) => before.productName.trim().toLowerCase() > after.productName.trim().toLowerCase() ? 1 : -1);
    });
  }

  onBackToShopClick() {
    this.router.navigate([`/shop`]);
  }

  onSubmitOrder() {
    this.httpClient.post(`${this.uri}/orders/add`, this.createOrder()).subscribe((response: any) => {
      if (response.status === 200) {
        this.orderReceived = true;
        let dialogWidth;
        this.family.referral ? dialogWidth = '37rem' : dialogWidth = '45rem';
        this.dialog.open(SubmitModalComponent, {
          backdropClass: 'darkest-back-drop',
          width: dialogWidth,
          disableClose: true,
          data: {
            family: this.family,
            pickUpDate: this.pickUpDate,
          }
        });
        this.clearSession();
      } else {
        if (this.submitErrorCount < 4) {
          this.snackBar.open('Submission failed. Please try again', 'Dismiss', {
            duration: 2000,
            panelClass: ['red-snackbar']
          });
          this.submitErrorCount++;
        } else {
          this.snackBar.open('Terminal Error.', 'Dismiss', {
            duration: 2000,
            panelClass: ['red-snackbar']
          });
          this.router.navigate([`/`]);
        }
      }
    });
  }

  openUpdateContactModal() {
    this.dialog.open(UpdateModalComponent, {
      backdropClass: 'darker-back-drop',
      data: {
        modal: 'contact',
        family: this.family
      },
      disableClose: true,
      width: this.MODAL_WIDTH
    });
  }

  openUpdateHouseholdModal() {
    this.dialog.open(UpdateModalComponent, {
      backdropClass: 'darker-back-drop',
      data: {
        modal: 'household',
        family: this.family
      },
      disableClose: true,
      width: this.MODAL_WIDTH
    });
  }

  openUpdatePickUpModal() {
    this.dialog.open(UpdateModalComponent, {
      backdropClass: 'darker-back-drop',
      data: {
        modal: 'pick-up',
        family: this.family,
        pickUpDate: this.pickUpDate
      },
      disableClose: true,
      width: this.MODAL_WIDTH
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (!this.orderReceived && !this.logOutClicked) {
      $event.returnValue = true;
    }
  }
}
