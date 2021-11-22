import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  moveDown = false

  constructor() { }
  ngOnInit(): void {
  }

  setContentPosition(){
    this.moveDown = !this.moveDown
  }

}
