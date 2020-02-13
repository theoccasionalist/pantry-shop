import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FamilyService } from 'src/app/services/family.service';
import { MatDialog } from '@angular/material/dialog';
import { IntroModalComponent } from '../intro-modal/intro-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private dialog: MatDialog, private familyService: FamilyService, private router: Router) { }

  ngOnInit() {
    this.familyService.resetFamily();
  }

  openIntroModal() {
    this.dialog.open(IntroModalComponent, {
      backdropClass: 'darker-back-drop',
      width: '35rem',
    });
  }

  toFamily() {
    this.router.navigate([`/family`]);
  }

}
