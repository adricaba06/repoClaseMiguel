import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-student-new-page',
  imports: [ReactiveFormsModule],
  templateUrl: './student-new-page.html',
  styleUrl: './student-new-page.css',
})
export class StudentNewPage {

  
  
  name = new FormControl('');
  surname = new FormControl('');
  nif = new FormControl('');
  age = new FormControl();
  course = new FormControl('');

  studentForm = new FormGroup({
    name: new FormControl(this.name, [
      Validators.required
    ])
  })


  printValues(){

    console.log('NOMBRE' + this.name)
    console.log(this.surname)
    console.log(this.nif)
    console.log(this.age)
    console.log(this.course)


  }

}
