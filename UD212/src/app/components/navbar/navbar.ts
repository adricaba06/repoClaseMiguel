import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(private route: Router){}

  navigateToSearch(){
    this.route.navigate(['search'])
  }

   navigateToFilteredMovie(){
    this.route.navigate(['filterMovie'])
  }

  navigateToPeople(){
    this.route.navigate(['people'])
  }

}
