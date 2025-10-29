import { Component } from '@angular/core';
import { StarWarsPerson } from "../star-wars-person/star-wars-person";

@Component({
  selector: 'app-star-wars-people-list',
  imports: [StarWarsPerson],
  templateUrl: './star-wars-people-list.html',
  styleUrl: './star-wars-people-list.css',
})
export class StarWarsPeopleList {

   starWarsCharacters = [
  { 
    name: 'Luke Skywalker',
    picture: 'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=270%2C143%2C1070%2C804', 
    height: '172', 
    mass: '77', 
    hair_color: 'blond',
    gender: 'male',
    homeworld: 'Tatooine'
  },
  { 
    name: 'C-3PO', 
    picture: 'https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=233%2C0%2C716%2C536',
    height: '167', 
    mass: '75', 
    hair_color: 'n/a',
    gender: 'n/a',
    homeworld: 'Tatooine'
  },
  { 
    name: 'R2-D2',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/0/05/R2-D2_-_Genuine_Movie_Star.jpg',
    height: '96', 
    mass: '32', 
    hair_color: 'n/a',
    gender: 'n/a',
    homeworld: 'Naboo'
  },
  { 
    name: 'Darth Vader', 
    picture: 'https://lumiere-a.akamaihd.net/v1/images/607598d0230e6a00018e21b2-image_354b1b56.jpeg?region=192%2C0%2C1152%2C864',
    height: '202', 
    mass: '136', 
    hair_color: 'none',
    gender: 'male',
    homeworld: 'Tatooine'
  },
  { 
    name: 'Leia Organa', 
    picture: 'https://hips.hearstapps.com/hmg-prod/images/princesa-leia-carrie-fisher-1540113645.png?crop=0.5232862375719518xw:1xh;center,top&resize=1200:*',
    height: '150', 
    mass: '49', 
    hair_color: 'brown',
    gender: 'female',
    homeworld: 'Alderaan'
  }

  
];


}
