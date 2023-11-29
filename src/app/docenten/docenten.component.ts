import { Component } from '@angular/core';
import { TutorService } from '../shared/tutor.service';

@Component({
  selector: 'app-docenten',
  templateUrl: './docenten.component.html',
  styleUrl: './docenten.component.css'
})
export class DocentenComponent {
  docenten = [
    { name: 'Ava', image: '../../assets/images/Ava.jpeg', days: 'Vrijdag', rate: 100},
    { name: 'Barbara', image: '../../assets/images/Barbara.jpeg', days: 'Maandag, Woensdag & Vrijdag',rate: 80 },
    { name: 'Gregory', image: '../../assets/images/Gregory.jpeg', days: 'Dinsdag & Donderdag', rate: 70 },
    { name: 'Jacob', image: '../../assets/images/Jacob.jpeg', days: 'Woensdag & Vrijdag', rate: 70},
    { name: 'Janine', image: '../../assets/images/Janine.jpeg', days: 'Maandag & Donderdag', rate: 70},
    { name: 'Melissa', image: '../../assets/images/Melissa.jpeg', days: 'Maandag, Woensdag & Vrijdag', rate: 80},

  ];

constructor(private tutorService: TutorService) {}

joinTutor(tutorName: string) {
  this.tutorService.setTutorName(tutorName);
}


}

