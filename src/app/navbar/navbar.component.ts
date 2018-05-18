import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Response } from '../interfaces/response';

declare var jQuery : any;
declare var $ : any;

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [LoginService]
})
export class NavbarComponent implements OnInit {

  //state varaibles
  public response : Response;

  constructor(
    private _loginService : LoginService
  ) { }

  ngOnInit() {
    $('.sidenav').sidenav();
    this._loginService.checkSession()
      .subscribe(response => this.response = response);
  }

  logOut(){
    this._loginService.logOut()
      .subscribe(response => window.location.href="/undevin/inicio");
  }

}
