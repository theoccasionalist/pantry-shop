import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-questions-modal',
  templateUrl: './questions-modal.component.html',
  styleUrls: ['./questions-modal.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class QuestionsModalComponent implements OnInit {
  buttonContent: string;
  routesButtonMap = new Map([
    ['family', 'Return to Form'],
    ['shop', 'Return to Shopping'],
    ['order', 'Return to Order Overview']
  ]);

  constructor(public dialogRef: MatDialogRef<QuestionsModalComponent>,
              @Inject (MAT_DIALOG_DATA) public currentPath: string) { }

  ngOnInit() {
    this.setButtonContent();
  }

  onCloseClick() {
    this.dialogRef.close();
  }

  setButtonContent() {
    this.routesButtonMap.forEach((buttonContent, route) => {
      if (route === this.currentPath) {
        this.buttonContent = buttonContent;
      }
    });
  }
}
