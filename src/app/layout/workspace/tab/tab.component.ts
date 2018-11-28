import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  //test
  index = 0;
  tabs = [ 'Tab 1', 'Tab 2' ];
  constructor() { }
  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }
}
