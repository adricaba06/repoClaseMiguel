import { Component, input } from '@angular/core';

@Component({
  selector: 'app-student-list-component',
  imports: [],
  templateUrl: './student-list-component.html',
  styleUrl: './student-list-component.css',
})
export class StudentListComponent {
  valid = input('')
  valname = input('')
  valsurname = input('')
  valnif = input('')
  valage = input<number>()
  valcourse = input('')

  mostrarAlerta(){
    return alert("Se ha pulsdo alumno: " + this.valname())
  }
}
