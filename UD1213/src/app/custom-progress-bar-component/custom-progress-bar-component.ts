import { Component, input, Input } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-progress-bar-component',
  imports: [NgbProgressbarModule],
  templateUrl: './custom-progress-bar-component.html',
  styleUrl: './custom-progress-bar-component.css',
})
export class CustomProgressBarComponent {

  value = input(0);
  color = input('');


}
