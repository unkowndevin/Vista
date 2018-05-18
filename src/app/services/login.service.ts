import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Response } from '../interfaces/response';

@Injectable()
export class LoginService {
  public uri ; String;
  constructor(
    private _http : HttpClient
  ){ this.uri = "/undevin//"}

  logIn(user) : Observable<Response>{
    return this._http.post<Response>(`${this.uri}/login`, user);
  }

  checkSession() : Observable<Response>{
    return this._http.get<Response>(`${this.uri}/sesion`);
  }

  logOut() : Observable<Response>{
    return this._http.get<Response>(`${this.uri}/logout`);
  }

  getProfile() : Observable<Response>{
    return this._http.get<Response>(`${this.uri}/perfil`);
  }

  sendMessage(message : String) : Observable<any>{
    return this._http.post<any>(`${this.uri}/diagnostic`, {
      message : message
    });
  }

  getResults() : Observable<any>{
    return this._http.get<any>(`${this.uri}/results`);
  }

}
