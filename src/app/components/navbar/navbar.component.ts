import { Component, OnInit } from '@angular/core';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit() {}

}
