import { Component, OnInit } from '@angular/core';

//jquery variables
declare var jQuery : any;
declare var $ : any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.parallax').parallax();
  }

}
