import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-diagnostic-results',
  templateUrl: './diagnostic-results.component.html',
  styleUrls: ['./diagnostic-results.component.css'],
  providers: [LoginService]
})
export class DiagnosticResultsComponent implements OnInit {

  results : any
  data: any
  labels : any
  type : any
  colors = [
    {}
  ]
  
  constructor(
    private _loginService : LoginService
  ) { }

  ngOnInit() {

    this._loginService.getResults().subscribe( response => {

      this.results = response
      if(response.status == 200){
        let severity = response.results.severity
        this.data = [{data: Object.values(severity),
          backgroundColor:
        ['#03a9f4','#ff7043','#ef5350'],
          hoverBackgroundColor:
        ['#03a9f4','#ff7043','#ef5350']}]
        this.labels = ["Baja", "Media", "Alta"]
        this.type = "doughnut"
      }

    })

  }

}
