import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieDiscoverPage } from "./pages/movie-discover-page/movie-discover-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieDiscoverPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UD212');
}
