import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from "./componets/student-list-component/student-list-component";
import { StudentListPage } from "./pages/student-list-page/student-list-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentListComponent, StudentListPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-angular-components-act');
}
