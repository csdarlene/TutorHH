import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;

  // Sample data for the select dropdowns
  niveaus = ['GLO', 'VOJ', 'VOS'];
  days = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      tutor: ['', Validators.required],
      leerjaar: [null, Validators.required],
      selectedNiveau: [[], Validators.required], // Use an array for multiple selections
      selectedDays: [[], Validators.required], // Use an array for multiple selections
    });
  }

  onSubmit() {
    // Handle form submission logic here
    if (this.myForm.valid) {
      // Form is valid, you can access the form values using this.myForm.value
      console.log(this.myForm.value);
      // You can also send the form data to a service, etc.
    } else {
      // Form is invalid, handle accordingly
    }
  }
}
