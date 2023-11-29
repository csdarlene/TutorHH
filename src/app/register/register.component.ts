import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorService } from '../shared/tutor.service';
import { StudentInfo } from './studentInfo.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  studenten: StudentInfo[] =this.tutorService.registerStudent;

  registerForm: FormGroup;

  niveaus = ['GLO', 'VOJ', 'VOS'];
  days = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'];

  constructor(
    private formBuilder: FormBuilder,
    private tutorService: TutorService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      voornaam: ['', Validators.required],
      familienaam: ['', Validators.required],
      tutor: [this.tutorService.getTutorName()],
      leerjaar: [null, Validators.required],
      selectedNiveau: ['', Validators.required],
      selectedDays: [[], Validators.required]
    });
 
}

onCheckboxChange(day: string) {
  const selectedDays = this.registerForm.get('selectedDays').value as string[];

  if (selectedDays.includes(day)) {
    // Remove the day if it's already selected
    selectedDays.splice(selectedDays.indexOf(day), 1);
  } else {
    // Add the day if it's not selected
    selectedDays.push(day);
  }

  // Update the form control value
  this.registerForm.get('selectedDays').setValue(selectedDays);
}

  onSubmit() {
    const newStudent = new StudentInfo(
      this.registerForm.value.voornaam,
      this.registerForm.value.familienaam,
      this.registerForm.value.tutor,
      this.registerForm.value.leerjaar,
      this.registerForm.value.selectedNiveau,
      this.registerForm.value.selectedDays
    );

    this.studenten.push(newStudent);
    console.log(this.registerForm.value)
    console.log(this.studenten)

  }
}
