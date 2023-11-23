import { Component } from '@angular/core';
import { Home } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  index: number = 0;

images:Home[]= [
  new Home('Wiskunde','../../assets/images/Wiskunde.png'),
  new Home('Economie','../../assets/images/Economie.png'),
  new Home('Natuurkunde','../../assets/images/Natuurkunde.png'),
  new Home('Engels','../../assets/images/Engels.png')
]

// nextImage(){ this.index=this.index+1;
//   if(this.index===3){this.index=0}
// }

// prevImage(){ this.index=this.index-1;
//   if(this.index===0){this.index=3}
// }

prevImage() {
  this.index = (this.index - 1 + this.images.length) % this.images.length;
}

nextImage() {
  this.index = (this.index + 1) % this.images.length;
}

}
