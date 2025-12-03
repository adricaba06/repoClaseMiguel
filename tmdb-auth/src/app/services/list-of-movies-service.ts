import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOfMoviesResponse } from '../models/interfaces/list.interface';
import { MoviesInListResponse } from '../models/interfaces/movie-List-details.interface';
import { DeleteMovieFromListdto } from '../models/dto/delete-movie.dto';
import { AddMovieDto } from '../models/dto/add-movie.dto';

@Injectable({
  providedIn: 'root',
})
export class ListOfMoviesService {

  constructor(private http: HttpClient){}

  public getUserListOfMovies(account_id: String): Observable<ListOfMoviesResponse>{
    return this.http.get<ListOfMoviesResponse>(`https://api.themoviedb.org/3/account/${account_id}/lists`)
  }

  public getUserListOfMoviesDetails(list_id: number): Observable<MoviesInListResponse>{
    return this.http.get<MoviesInListResponse>(`https://api.themoviedb.org/3/list/${list_id}`)
  }

  public deleteMovieFromList(list_id: number, dto: DeleteMovieFromListdto ): Observable<MoviesInListResponse>{
    return this.http.post<MoviesInListResponse>(`https://api.themoviedb.org/3/list/${list_id}/remove_item`, dto);
  }

  public deleteList(list_id: number): Observable<ListOfMoviesResponse>{
    return this.http.delete<ListOfMoviesResponse>(`https://api.themoviedb.org/3/list/${list_id}`);
  }

  public addMovieToList(list_id: number, dto: AddMovieDto): Observable<ListOfMoviesResponse>{
    return this.http.post<ListOfMoviesResponse>(`https://api.themoviedb.org/3/list/${list_id}/add_item`, dto);
  }
  
}
