import { Component, OnInit } from '@angular/core';
import { Character } from '../../interface/people-list-response.interface';
import { PeopleService } from '../../services/people-service';

@Component({
  selector: 'app-people-list-component',
  imports: [],
  templateUrl: './people-list-component.html',
  styleUrl: './people-list-component.css',
})
export class PeopleListComponent implements OnInit{
  peopleList: Character[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe((resp) => {
      this.peopleList = resp.results;
    })
  }

}
