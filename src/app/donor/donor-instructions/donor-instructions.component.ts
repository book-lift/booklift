import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donor-instructions',
  templateUrl: './donor-instructions.component.html',
  styleUrls: ['./donor-instructions.component.css']
})
export class DonorInstructionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isShown: boolean = false ; // hidden by default


  toggleShow() {

  this.isShown = ! this.isShown;

  }
}