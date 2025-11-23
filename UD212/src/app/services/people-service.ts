import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interface/peopleInterface';
import { PeopleDetail } from '../pages/people-detail/people-detail';


@Injectable({
  providedIn: 'root',
})
export class PeopleService {

  constructor(private http: HttpClient){}

  public getPeopleList(): Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(`https://api.themoviedb.org/3/person/popular`)
  }

  public getPersonById(id: number): Observable<PeopleDetail>{
    return this.http.get<PeopleDetail>(`https://api.themoviedb.org/3/person/${id}?language=es-ES`)
  }


  
}
