import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-intro-modal',
  templateUrl: './intro-modal.component.html',
  styleUrls: ['./intro-modal.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class IntroModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<IntroModalComponent>) { }

  ngOnInit() {
  }

  onCloseClick() {
    this.dialogRef.close();
  }
}
