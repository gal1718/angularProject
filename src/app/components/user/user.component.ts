import { Component, OnInit, Input,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  @Input() user: {fname: string, lname:string, hasCovid: boolean, isolated: boolean,  };
 

  userClicked= false;

  constructor() { }

  ngOnInit(): void {
    
  }


 

}
