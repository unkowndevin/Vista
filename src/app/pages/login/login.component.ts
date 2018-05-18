import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

//Services
import { LoginService } from "../../services/login.service";

//Interfaces
import { Response } from '../../interfaces/response';

//Classes
import { MyValidators } from "../../classes/my-validators";
import { Animations } from "../../classes/animations";
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [(new Animations()).shake],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  //state variables
  public response : Response;
  public loading : boolean;
  public animationTrigger : String = "unchecked";

  //form controls
  public email : FormControl;
  public password : FormControl;

  //form validator
  public myValidators : MyValidators = new MyValidators();

  //form group
  public userForm : FormGroup;

  private location : Location;

  constructor(
    private _loginService : LoginService,
    private _location : Location
  ) {
    this.location = _location
  }

  ngOnInit() {
    this.formInit();
  }

  formInit(){
    this.formControls();
    this.formGroup();
  }

  formControls(){
    this.email = new FormControl('', this.myValidators.emailValidator);
    this.password = new FormControl('', this.myValidators.passwordValidator);
  }

  formGroup(){
    this.userForm = new FormGroup({
      email: this.email,
      password: this.password
    })
  }

  logIn(){
    this.loading = true;
    this._loginService.logIn(this.userForm.value)
      .subscribe( response => {
        if(response.status==200){
          window.location.href="/undevin/inicio";
        }else{
          this.loading = false;
          this.animationTrigger = "invalid";
          this.response = response;
        }
      });
  }

  reinitAnimation(){
    this.animationTrigger = "unchecked";
  }

  back(){
    this.location.back()
  }

}
