import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [LoginService]
})
export class ProfileComponent implements OnInit {

  private userData : any

  constructor(
    private _loginService : LoginService
  ) { }

  ngOnInit() {
    /*this.userData = {
      name: "user.usu_name",
      last_name: '"user.usu_last_name"',
      email: "user.usu_email",
      nick_name: "user.usu_nick_name",
      birth_date: "user.usu_birth_date",
      place: "name",
      genre: "user.usu_genre"
    }*/
    this._loginService.getProfile().subscribe( response => {
      if(response.status == 505){

        window.location.href = "/undevin/entra"

      }else{

        this.userData = response.message

      }
    })

  }

}
