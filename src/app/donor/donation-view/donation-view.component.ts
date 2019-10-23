import { Component, OnInit } from '@angular/core';

import { NumericInput } from '@angular/numeric-keyboard'


const INPUT_PLACEHOLDER_TEXT = "How many books would you like to donate?";

@Component({
  selector: 'app-donation-view',
  templateUrl: './donation-view.component.html',
  styleUrls: ['./donation-view.component.css']
})
export class DonationViewComponent implements OnInit {
  displayText = INPUT_PLACEHOLDER_TEXT;
  showingPlaceholder = true;

  constructor() { }

  ngOnInit() {
  }

  onClearPressed() {
    this.showingPlaceholder = true;
    this.displayText = INPUT_PLACEHOLDER_TEXT;
  }

  onKeypadClick(event: any) {
    const value = event.target.dataset.value;
    
    if (this.showingPlaceholder) {
      this.showingPlaceholder = false;
      this.displayText = "";
    }

    this.displayText += value;
  }
  
}