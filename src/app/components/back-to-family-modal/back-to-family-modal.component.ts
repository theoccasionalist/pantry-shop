import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-to-family-modal',
  templateUrl: './back-to-family-modal.component.html',
  styleUrls: ['./back-to-family-modal.component.css']
})
export class BackToFamilyModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BackToFamilyModalComponent>, private router: Router) { }

  ngOnInit() {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onContinueClick() {
    this.dialogRef.close();
    this.router.navigate([`/family`]);
  }
}
