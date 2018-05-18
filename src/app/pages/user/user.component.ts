import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [LoginService]
})
export class UserComponent implements OnInit {

  private userData : any

  constructor(
    private _loginService : LoginService
  ) { }

  ngOnInit() {
    this._loginService.getProfile().subscribe( response => {
      if(response.status == 505){

        window.location.href = "/dev/entra"

      }else{

        this.userData = response.message

      }
    })

  }

}
