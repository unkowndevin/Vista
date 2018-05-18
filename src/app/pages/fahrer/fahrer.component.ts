import { Component, OnInit } from '@angular/core';

//jquey variables
declare var jQuery : any;
declare var $ : any;

@Component({
  selector: 'app-fahrer',
  templateUrl: './fahrer.component.html',
  styleUrls: ['./fahrer.component.css']
})
export class FahrerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.parallax').parallax();
  }

}
