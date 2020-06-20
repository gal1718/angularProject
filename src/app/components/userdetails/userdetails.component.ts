import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent{


   @Input() clickeduser;
   @Output() close = new EventEmitter

  constructor() { }

 

  // closeUserDetails(clickeduser){
  //   this.close.emit(clickeduser);
  // }

  
  

}
