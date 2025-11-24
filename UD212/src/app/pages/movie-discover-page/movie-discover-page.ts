import { Component, Input, input, OnInit } from '@angular/core';
import { Genre } from '../../interface/genreInterface';
import { GenreService } from '../../services/genre-service';
import { MovieResult } from '../../interface/movieInterface';
import { DiscoverService } from '../../services/discover-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-movie-discover-page',
  imports: [FormsModule],
  templateUrl: './movie-discover-page.html',
  styleUrl: './movie-discover-page.css',
})
export class MovieDiscoverPage implements OnInit{ 
  genres: Genre[] = [];
  movies: MovieResult[] = [];
  id = 0
  type = 'movie'
  

  constructor(private gs: GenreService, private discoverService: DiscoverService){}
 

  ngOnInit(): void {
    this.gs.getGenrers(this.type).subscribe((resp) =>{
      this.genres = resp.genres;
    })

  }

  public getMoviesById(){
    console.log(this.id)
    this.discoverService.getMoviesById(this.id, this.type).subscribe(resp =>{
      this.movies = resp.results;
    })
  }

}
