import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-modal',
  templateUrl: './submit-modal.component.html',
  styleUrls: ['./submit-modal.component.css']
})
export class SubmitModalComponent implements OnInit {

  constructor(public authService: AuthService, public dialogRef: MatDialogRef<SubmitModalComponent>,
              @Inject (MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit() {
  }
}
