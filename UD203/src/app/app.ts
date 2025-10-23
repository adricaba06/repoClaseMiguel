import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaAlumnos } from "./lista-alumnos/lista-alumnos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaAlumnos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UD203');
}
