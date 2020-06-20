import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() loggeduser: {fname:string, lname: string};
  @Output() openmenu = new EventEmitter;
 

  constructor() { }

  ngOnInit(): void {
  }

}
