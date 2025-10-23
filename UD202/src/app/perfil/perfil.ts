import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {

 nameVal = 'Antonio';
 surnameVal = 'Lobato';
 emailVal = 'antoniolobato@gmail.com';
 ageVal = 23;
 cityVal = 'sao pablo';

 resetValues() {
  this.nameVal = '';
  this.surnameVal = '';
  this.emailVal = '';
  this.cityVal = '';
  this.ageVal = 0;



}


}
