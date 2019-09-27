import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async login() {
  }

  toFamily() {
    this.router.navigate([`/family`]);
  }

}
