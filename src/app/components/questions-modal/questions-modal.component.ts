import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Family } from 'src/app/models/family.model';
import { FamilyService } from 'src/app/services/family.service';

@Component({
  selector: 'app-questions-modal',
  templateUrl: './questions-modal.component.html',
  styleUrls: ['./questions-modal.component.css']
})
export class QuestionsModalComponent implements OnInit {
  buttonContent: string;
  family: Family;
  referral: boolean;
  routesButtonMap = new Map([
    ['family', 'Return to Family Information'],
    ['pick-up', 'Return to Pick Up'],
    ['shop', 'Return to Shopping'],
    ['cart', 'Return to Cart Overview']
  ]);

  constructor(public dialogRef: MatDialogRef<QuestionsModalComponent>,
              @Inject (MAT_DIALOG_DATA) public currentPath: string, private familyService: FamilyService) { }

  ngOnInit() {
    this.familyService.getFamily().subscribe(family => this.referral = family.referral);
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
