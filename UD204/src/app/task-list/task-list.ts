import { Component } from '@angular/core';

type Task = {
  id: number;
  title: string;
  description: string;
  done: boolean;
};

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {



  tasks =
    [
  { id: 1, title: 'Hacer la compra', description: 'Ir al Mercadona', done: false },
  { id: 2, title: 'Estudiar Angular', description: 'Aprender a crear un componente', done: true },
  { id: 3, title: 'Pasear al perro', description: 'Pasearlo por el parque', done: false },
  { id: 4, title: 'Llamar a mamá', description: 'Contarle cómo va la semana', done: false },
  { id: 5, title: 'Limpiar la cocina', description: 'Fregar platos y encimera', done: true },
  { id: 6, title: 'Leer un capítulo', description: 'Del libro de desarrollo personal', done: false },
  { id: 7, title: 'Enviar el CV', description: 'Aplicar a la oferta de Frontend', done: true },
  { id: 8, title: 'Regar las plantas', description: 'Especialmente las del balcón', done: false },
  { id: 9, title: 'Actualizar portfolio', description: 'Subir el último proyecto', done: false },
  { id: 10, title: 'Hacer ejercicio', description: '30 minutos de cardio', done: true }
  ];

  cambiarEstado(id: number) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == id) {
        if (this.tasks[i].done == true) {
          this.tasks[i].done = false;
        } else {
          this.tasks[i].done = true;
        }
      }
    }

  }
}
