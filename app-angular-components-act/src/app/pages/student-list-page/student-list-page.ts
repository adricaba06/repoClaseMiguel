import { Component } from '@angular/core';

import { StudentListComponent } from "../../componets/student-list-component/student-list-component";

@Component({
  selector: 'app-student-list-page',
  imports: [StudentListComponent],
  templateUrl: './student-list-page.html',
  styleUrl: './student-list-page.css',
})
export class StudentListPage{

  

  students = [
    {

      id: '1',
      name: 'Antonio',
      surname: 'Lopez',
      nif: '21212112A',
      age: 12,
      course: 'secundaria'

    },

    {

      id: '2',
      name: 'Laura',
      surname: 'Lopez',
      nif: '3434323',
      age: 12,
      course: 'primaria'

    }
  ]

  size = this.students.length
}
