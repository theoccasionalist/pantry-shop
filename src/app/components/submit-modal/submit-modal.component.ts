import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-submit-modal',
  templateUrl: './submit-modal.component.html',
  styleUrls: ['./submit-modal.component.css']
})
export class SubmitModalComponent implements OnInit {

  constructor(public authService: AuthService, public dialogRef: MatDialogRef<SubmitModalComponent>,
              @Inject (MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
}
