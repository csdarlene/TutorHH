import { Injectable } from '@angular/core';
import { StudentInfo } from '../register/studentInfo.model';

@Injectable({
  providedIn: 'root',
})
export class TutorService {
  private selectedTutor: string;

  setTutorName(tutorName: string) {
    this.selectedTutor = tutorName;
  }

  getTutorName() {
    return this.selectedTutor;
  }

  registerStudent: StudentInfo[] = [];

  addStudent(student: StudentInfo) {
    this.registerStudent.push(student);
  }
}
