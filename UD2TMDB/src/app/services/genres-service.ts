import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreResponse } from '../interface/genre-list.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GenresService {

  constructor(private http: HttpClient){}

  getGenres(): Observable<GenreResponse>{
    return this.http.get<GenreResponse>(`https://api.themoviedb.org/3/genre/movie/list?language=es`);
  }
  
}
