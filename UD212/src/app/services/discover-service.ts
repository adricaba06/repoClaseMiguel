import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieResponse } from '../interface/movieInterface';
import { Observable } from 'rxjs';
import { GenresResponse } from '../interface/genreInterface';
import { MovieDetails } from '../interface/movieDetailsInterface';

@Injectable({
  providedIn: 'root',
})
export class  DiscoverService{

  constructor(private http: HttpClient){}

  public getMoviesById(id: number | null, type: String): Observable<MovieResponse>{
      return this.http.get<MovieResponse>(`https://api.themoviedb.org/3/discover/${type}?with_genres=${id}&language=es-ES`);
    }

  public getFilteredMovie(param: String): Observable<MovieResponse>{
    return this.http.get<MovieResponse>(`https://api.themoviedb.org/3/movie/${param}?language=es-ES`);
  }

  public getMovie(id: number): Observable<MovieDetails>{
    return this.http.get<MovieDetails>(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`)
  }
  
}
