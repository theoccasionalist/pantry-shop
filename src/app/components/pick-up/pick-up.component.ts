import { Component, OnInit } from '@angular/core';
import { PickUpDateService } from 'src/app/services/pick-up-date.service';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.css']
})
export class PickUpComponent implements OnInit {
  pickUpDateOptions: string[];
  pickUpDate = new FormControl('', Validators.required);

  constructor(private pickUpDateService: PickUpDateService, private router: Router) { }

  ngOnInit() {
    this.pickUpDateOptions = this.pickUpDateService.getPickUpDateOptions();
  }

  onBackToFamilyClick() {
    this.router.navigate(['family']);
  }

  onGoShoppingClick() {
    this.router.navigate([`/shop`]);
  }

}
