import { NiveausComponent } from './../../niveaus/niveaus.component';
import { Component, Input, OnInit } from '@angular/core';
import { StudentInfo } from '../studentInfo.model';
import { ActivatedRoute } from '@angular/router';
import { TutorService } from '../../shared/tutor.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css',
})
export class ConfirmComponent implements OnInit {
  voorNaam: string;
  familieNaam: string;
  tutor: string;
  leerJaar: number;
  niveau: string;
  dag: string;

  studentObject: StudentInfo = null;
  studenten: StudentInfo[] = this.tutorService.registerStudent;

  constructor(
    private route: ActivatedRoute,
    private tutorService: TutorService
  ) {}

  ngOnInit(): void {
    this.voorNaam = this.route.snapshot.paramMap.get('voornaam');

    this.familieNaam = this.route.snapshot.paramMap.get('familienaam');
    this.tutor = this.route.snapshot.paramMap.get('tutor');
    const leerJaarNum = this.route.snapshot.paramMap.get('leerjaar');
    this.leerJaar = parseInt(leerJaarNum);
    this.niveau = this.route.snapshot.paramMap.get('niveau');
    this.dag = this.route.snapshot.paramMap.get('dag');

    this.studentObject = this.studenten.find(
      (student) =>
        student.voornaam == this.voorNaam &&
        student.familienaam == this.familieNaam &&
        student.tutor == this.tutor &&
        student.leerjaar == this.leerJaar &&
        student.niveaus == this.niveau &&
        student.days == this.dag
    );

    // this.registerUitgave.value.maandObject1 = this.maanden.find(maand => maand.maand == this.maandString);
    console.log(this.studentObject);

  }
}
