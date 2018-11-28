import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  constructor() { }

  ngOnInit() {
  }

}
