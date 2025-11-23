import { Component, inject, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people-service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonDetail } from '../../interface/peopleDetailInterface';

@Component({
  selector: 'app-people-detail',
  imports: [],
  templateUrl: './people-detail.html',
  styleUrl: './people-detail.css',
})
export class PeopleDetail implements OnInit{

  person: PersonDetail | undefined;
  personId = 0

  constructor(private ps: PeopleService){}
  activatedRoute = inject(ActivatedRoute);


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      const id = params['id']
      this.personId = id;
    });
    console.log(this.personId)
    this.getPersonById()

  }

  public getPersonById(){
    this.ps.getPersonById(this.personId).subscribe(resp =>{
      this.person = resp.person;
    })
  }




}
