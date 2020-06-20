import { Component } from '@angular/core';
import {users} from './data/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggeduser = {fname: 'Gal', lname:'Shimoni'};
  title = 'COVID - 19';
  covidUsers = users;
  sickPeople = 0;
  quarantinedPeople = 0;
  healthyPeople = 0;
  clickedUser;
  showMenu = false;

// x;
// y;
//   imgs = ['https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
// 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_1280.jpg',
// 'https://cdn.pixabay.com/photo/2014/05/07/06/44/animal-339400_1280.jpg'];

constructor(){

  for(let i=0;i<this.covidUsers.length;i++){
    if(this.covidUsers[i].hasCovid){
      this.sickPeople += 1;
    }
    else{
      this.healthyPeople += 1;
    }
    if(this.covidUsers[i].isolated){
      this.quarantinedPeople += 1;
    }
  }
  
}

  // move(e: MouseEvent){
  //   this.x = e.clientX +50;
  //   this.y = e.clientY+50;
  //  // console.log(event);
  //  // this.isLoggedIn = !this.isLoggedIn;
  // }
}
