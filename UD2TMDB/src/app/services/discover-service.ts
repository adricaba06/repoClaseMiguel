import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDiscoverResponse } from '../interface/movie-list.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DiscoverService {

  private readonly API_URL = 'https://api.themoviedb.org/3/discover/movie';

  constructor(private http: HttpClient) {}

  getMoviesByGenre(genreId: number): Observable<MovieDiscoverResponse> {
    const params = new HttpParams()
      .set('with_genres', genreId.toString())
      .set('language', 'es');

    return this.http.get<MovieDiscoverResponse>(this.API_URL, { params });
    //he investigado y he visto que varias persona ponen los parametros aparte de esta forma 
  }

  getByGenre(type: 'movie' | 'tv', genreId: number): Observable<MovieDiscoverResponse> {
  const apiUrl = `https://api.themoviedb.org/3/discover/${type}`;
  const params = new HttpParams().set('with_genres', genreId.toString()).set('language', 'es');
  return this.http.get<MovieDiscoverResponse>(apiUrl, { params });
}

}