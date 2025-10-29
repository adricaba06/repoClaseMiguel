import { Component, input } from '@angular/core';

@Component({
  selector: 'app-star-wars-person',
  imports: [],
  templateUrl: './star-wars-person.html',
  styleUrl: './star-wars-person.css',
})
export class StarWarsPerson {

  name = input('');
  picture = input('');
  height = input('');
  mass = input('');
  hair_color = input('');
  gender = input('');
  homeworld = input('');

}
