import { Component } from '@angular/core';

type Alumno = {
  id: number;
  name: string;
  surname: string; 
  age: number; 
  course: string
  sex: string;
  

};

@Component({
  selector: 'app-lista-alumnos',
  imports: [],
  templateUrl: './lista-alumnos.html',
  styleUrl: './lista-alumnos.css',
})

export class ListaAlumnos {

 alumnos: Alumno[] = [

  { id: 1, name: "Carlos", surname: "Gómez", age: 20, course: "Matemáticas", sex: "Masculino" },
  {id: 2,  name: "Lucía", surname: "Martínez", age: 22, course: "Historia", sex: "Femenino" },
  { id: 3, name: "Miguel", surname: "Fernández", age: 19, course: "Biología", sex: "Masculino" },
];

}
