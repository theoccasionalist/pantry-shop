import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-questions-modal',
  templateUrl: './questions-modal.component.html',
  styleUrls: ['./questions-modal.component.css']
})
export class QuestionsModalComponent implements OnInit {
  buttonContent: string;
  routesButtonMap = new Map([
    ['family', 'Return to Family Information'],
    ['shop', 'Return to Shopping'],
    ['cart', 'Return to Cart Overview']
  ]);

  constructor(public dialogRef: MatDialogRef<QuestionsModalComponent>,
              @Inject (MAT_DIALOG_DATA) public currentPath: string) { }

  ngOnInit() {
    this.setButtonContent();
  }

  closeModal() {
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
