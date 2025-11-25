import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomProgressBarComponent } from "./custom-progress-bar-component/custom-progress-bar-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomProgressBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UD1213');
}
