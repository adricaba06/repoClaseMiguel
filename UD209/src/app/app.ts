import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterFormPage } from "./pages/register-form-page/register-form-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterFormPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UD209');
}
