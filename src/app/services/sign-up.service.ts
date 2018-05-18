import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '../interfaces/response';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignUpService {
  public uri : String
  constructor(
    private _http : HttpClient
  ) { this.uri = "/undevin//" }

  getPlaces() : Observable<Response>{
    return this._http.get<Response>(`${this.uri}/paises`);
  }

  signUp(user) : Observable<Response>{
    return this._http.post<Response>(`${this.uri}/registrar`, user);
  }

}
