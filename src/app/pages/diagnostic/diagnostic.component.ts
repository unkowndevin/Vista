import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

declare var M;
declare var jQuery : any;
declare var $ : any;

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css'],
  providers: [LoginService]
})
export class DiagnosticComponent implements OnInit {

  constructor(
    private _logInService : LoginService
  ) { }

  ngOnInit() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'bottom'
    });
    this._logInService.checkSession()
      .subscribe(response => { 
        if(response.status==505){
          window.location.href = "/undevin"
        }
      });
  }

}
