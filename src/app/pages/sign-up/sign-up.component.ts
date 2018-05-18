import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


//Classes
import { MyValidators } from "../../classes/my-validators";
import { Animations } from "../../classes/animations";

//Services
import { SignUpService } from '../../services/sign-up.service';
import { LoginService } from '../../services/login.service';

//Interfaces
import { Place } from '../../interfaces/place';
import { Response } from '../../interfaces/response';
import { Location } from '@angular/common';

//jquery variables
declare var jQuery : any;
declare var $ : any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [(new Animations()).shake],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit {

  //places
  public places : Place[] = [];

  //state variables
  public response : Response;
  public loading : boolean = false;
  public animationTrigger : String = "unchecked";

  //form controls
  public name : FormControl;
  public last_name : FormControl;
  public nick_name : FormControl;
  public email : FormControl;
  public password : FormControl;
  public birth_date : FormControl;
  public place : FormControl;
  public genre : FormControl;
  public accept : FormControl;

  //form validator
  public myValidator : MyValidators;

  //form group
  public userData : FormGroup;

  private location : Location;

  constructor(
    private signUpService : SignUpService,
    private _location : Location
  ) {this.location = _location}

  ngOnInit() {
    this.signUpService.getPlaces()
      .subscribe(response => {
        response.message.map( value => {
          this.places.push({ name: value.name, abbr: value.abbr });
        });
        console.log(this.places)
      }, err => {
        console.log(err.message);
      });
    setTimeout(() => {
      $('select').formSelect();
    },1500);
    this.formInit();
  }

  formInit(){
    this.myValidator = new MyValidators();
    this.formControls();
    this.formGroup();
  }

  formControls(){
    this.name = new FormControl('');
    this.last_name = new FormControl('');
    this.nick_name = new FormControl('');
    this.email = new FormControl('');
    this.password = new FormControl('');
    this.birth_date = new FormControl('');
    this.place = new FormControl('');
    this.genre = new FormControl('');
    this.accept = new FormControl('');
  };

  formGroup(){
    this.userData = new FormGroup({
      name : this.name,
      last_name : this.last_name,
      nick_name : this.nick_name,
      email : this.email,
      password : this.password,
      birth_date : this.birth_date,
      place : this.place,
      genre : this.genre,
      accept : this.accept
    });
  }

  signup(){
    this.loading = true;
    let user = this.userData.value;
    if(this.caracteresNombres(user.name) && this.caracteresNombres(user.last_name) && this.sinPEspacio(user.name) && this.sinPEspacio(user.last_name) && this.cortarEspacios(user.name) && this.cortarEspacios(user.last_name) && this.letras(user.name) && this.letras(user.last_name) && this.caracteresUsu(user.nick_name) && this.valUsu(user.nick_name) && this.valEmail(user.email) && this.caracteresPass(user.password) && this.valPass(user.password) && this.valDate(user.birth_date)){
      delete user.accept;
      this.signUpService.signUp(user)
        .subscribe( response => {
          if(response.status==200){
            window.location.href = "dev/entra";
          }else{
            this.loading = false;
            this.animationTrigger = "invalid";
            this.response = response;
          }
        });
    }else{
      this.loading = false;
      this.animationTrigger = "invalid";
    }
    
  }

  reinitAnimation(){
    this.animationTrigger = "unchecked";
  }

  del(field){
    if(this.response && this.response.message[field]){
      delete this.response.message[field];
    }
  }

  back(){
    this.location.back()
  }

  caracteresNombres(nombre){
    if(nombre.length<2||nombre.length>60){
      return false;
    }
    else{
      return true;
    }
  }
  
  //funcion para comprobar que no haya un espacio al inicio de un nombre o appellido
  sinPEspacio(nombre){
    if(nombre.indexOf(" ")==0){
      return false;
    }
    else{
      return true;
    }
  }
  
  //funcion para comprobar que no haya mas de un espacio seguido
  cortarEspacios(string){
  
    let pat_Space=/\s{2,}/
    let string2=string.replace(pat_Space," ");
    if (string==string2) {
      return true;
    }
    else{
      return false;
    }
  }
  
  //funcion para hacer que el usuario solo escriba letras del alfabeto español en el nombre y apellido
  letras(nombre){
    let letra
    let pat_Let=/[^(?:a-zA-ZñÑáÁéÉíÍóÓúÚüÜ)]/
    for (var i = 0; i < nombre.length; i++) {
    letra=nombre[i].match(pat_Let);
    }
    if (letra!=null) {
      return false;
    }
    else{
      return true;
    }
  }
  
  //funcion pr validar la longitud del nombre de usuario
  caracteresUsu(usuario){
    if(usuario.length<2||usuario.length>30){
      return false;
    }
    else{
      return true;
    }
  }
  
  //funcion para validar los caracteres del nombre de usuario
  valUsu(usuario){
    let letra
    let pat_usu=/[^(?:a-zA-Z\s\.\d\-)]/
    for (var i = 0; i < usuario.length; i++) {
      letra=usuario[i].match(pat_usu);
    }
    if (letra!=null) {
      return false;
    }
    else{
      return true;
    }
  }
  
  //funcion para validar estructura de correo electrónico
  valEmail(email){
    let pat_email=/(?:\w+\@{1}\w+\.{1}\w+){1}/
    let bool=pat_email.test(email);
    if(bool){
      email=email.match(pat_email)
      return true;
    }
    else{
      return false;
    }
  }
  
  //funcion para validar el tamaño de la contraseña
  caracteresPass(password){
    if(password.length<6||password.length>30){
      return false;
    }
    else{
      return true;
    }
  }
  
  //funcion para validar los caracteres de la contraseña
  valPass(password){
    let caracter
    let pat_pass=/[^(?:a-zA-Z\d\-\=\/\&\%\#\$\”\!)]/
    for (var i = 0; i < password.length; i++) {
      caracter=password[i].match(pat_pass)
    }
    if (caracter!=null) {
      return false;
    }
    else{
      return true;
    }
  }
  
  //funcion para validar que el usuario tenga 16 años o mas
  valDate(fecha){
    let date : any= new Date()
    let date2 : any=date.toString()
    let date3 : any=date2.split(" ")
    let fecha2 : any=fecha.split("-")
    let meses={
      Jan:1,
      Feb:2,
      Mar:3,
      Apr:4,
      May:5,
      Jun:6,
      Jul:7,
      Aug:8,
      Sep:9,
      Oct:10,
      Nov:11,
      Dec:12
    }
    let mes=meses[date3[1]]
    if(date3[3]-fecha2[0]<16){
      return false
    }
    else if(date3[3]-fecha2[0]==16){
      if(mes-fecha2[1]>0){
        return false
      }
      else if(mes-fecha2[1]==0){
        if(date3[2]-fecha2[2]>0){
          return false
        }
        else{
          return true
        }
      }
      else{
        return true
      }
  
    }
    else{
      return true
    }
  
  }

}
