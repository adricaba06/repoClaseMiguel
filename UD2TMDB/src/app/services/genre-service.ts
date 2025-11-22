import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenresResponse } from '../interface/genreInterface';
import { Observable } from 'rxjs';
import { MovieResponse } from '../interface/movieInterface';

@Injectable({
  providedIn: 'root',
})
export class GenreService {


  constructor(private http: HttpClient){}

  public getGenrers(type: String): Observable<GenresResponse>{
    return this.http.get<GenresResponse>(`https://api.themoviedb.org/3/genre/${type}/list?language=es`)
  }
  
}
