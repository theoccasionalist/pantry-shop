import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { QuestionsModalComponent } from '../questions-modal/questions-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  buttonContent: string;
  currentPath: string;
  routesButtonMap = new Map([
    ['family', 'Form Help'],
    ['shop', 'Shop Help'],
    ['order', 'Order Help']
  ]);
  constructor(private activatedRoute: ActivatedRoute, public authService: AuthService, private dialog: MatDialog) {}

  ngOnInit() {
    this.activatedRoute.url.subscribe(currentPath => this.currentPath = currentPath[0].path);
    this.setButtonContent();
  }

  onLogOutClick() {
    this.authService.logOutClicked();
    this.authService.logout();
  }

  openQuestionsModal() {
    this.dialog.open(QuestionsModalComponent, {
      backdropClass: 'darker-back-drop',
      data: this.currentPath,
      width: '35rem',
    });
  }

  setButtonContent() {
    this.routesButtonMap.forEach((buttonContent, route) => {
      if (route === this.currentPath) {
        this.buttonContent = buttonContent;
      }
    });
  }
}
