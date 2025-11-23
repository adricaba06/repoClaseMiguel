import { Component, inject, OnInit } from '@angular/core';
import { DiscoverService } from '../../services/discover-service';
import { MovieResult } from '../../interface/movieInterface';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../../interface/movieDetailsInterface';

@Component({
  selector: 'app-movie-detail-page',
  imports: [],
  templateUrl: './movie-detail-page.html',
  styleUrl: './movie-detail-page.css',
})
export class MovieDetailPage implements OnInit {
  movieId = 0
  movie: MovieDetails | undefined;

  constructor(private ms: DiscoverService){}
  private activatedRoute = inject(ActivatedRoute)

  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      const id = params['id']
      this.movieId = id;
      this.getMovieById()
    })
  }

  getMovieById(){
    this.ms.getMovie(this.movieId).subscribe(resp =>{
      this.movie = resp
      
    })
  }



}
