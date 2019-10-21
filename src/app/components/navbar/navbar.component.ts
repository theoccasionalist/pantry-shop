import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
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
    ['pick-up', 'Pick Up Help'],
    ['shop', 'Shop Help'],
    ['cart', 'Order Help']
  ]);
  constructor(private activatedRoute: ActivatedRoute, public authService: AuthService, private dialog: MatDialog) {}

  ngOnInit() {
    this.activatedRoute.url.subscribe(currentPath => this.currentPath = currentPath[0].path);
    this.setButtonContent();
  }

  openQuestionsModal() {
    this.dialog.open(QuestionsModalComponent, {
      width: '900px',
      data: this.currentPath
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
