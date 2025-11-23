import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people-service';
import { Person } from '../../interface/peopleInterface';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-people-list-page',
  imports: [FormsModule],
  templateUrl: './people-list-page.html',
  styleUrl: './people-list-page.css',
})
export class PeopleListPage implements OnInit {

  peopleList: Person[] = [];


  constructor(private ps: PeopleService, private router: Router){}
  ngOnInit(): void {
    this.getListOfPeople();
  }

  getListOfPeople(){
    this.ps.getPeopleList().subscribe(resp =>{
      this.peopleList = resp.results
    });
  }

  navigateToDetails(id: number){
    this.router.navigate(['people', id]);
  }





}
