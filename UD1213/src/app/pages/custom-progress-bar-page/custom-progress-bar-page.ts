import { Component } from '@angular/core';
import { CustomProgressBarComponent } from "../../custom-progress-bar-component/custom-progress-bar-component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-progress-bar-page',
  imports: [CustomProgressBarComponent, FormsModule],
  templateUrl: './custom-progress-bar-page.html',
  styleUrl: './custom-progress-bar-page.css',
})
export class CustomProgressBarPage {
  value = 10
  color = '' 

  sumar() {
    this.value = this.value +10;
  }

  restar() {
    this.value = this.value - 10;
  }

}
