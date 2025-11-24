import { Component, OnInit } from '@angular/core';
import { DiscoverService } from '../../services/discover-service';
import { MovieResult } from '../../interface/movieInterface';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtered-movies-page',
  imports: [FormsModule],
  templateUrl: './filtered-movies-page.html',
  styleUrl: './filtered-movies-page.css',
})
export class FilteredMoviesPage implements OnInit{
  param  = 'popular'
  movies: MovieResult[] = []
  id = 0

  constructor(private ms: DiscoverService, private router: Router){}

  ngOnInit(): void {
    this.getFilteredMovieByParam();
  }

  getFilteredMovieByParam(){
    this.ms.getFilteredMovie(this.param).subscribe(resp =>{
      this.movies = resp.results;
    });
  }

  navigateToDetails(movie: MovieResult){
    this.id = movie.id;
    this.router.navigate(['/Movie',this.id]);
  }

}
