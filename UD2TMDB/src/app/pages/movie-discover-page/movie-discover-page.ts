import { Component, OnInit } from '@angular/core';
import { GenresService } from '../../services/genres-service';
import { Genre } from '../../interface/genre-list.interface';
import { DiscoverService } from '../../services/discover-service';
import { Movie } from '../../interface/movie-list.interface';

@Component({
selector: 'app-movie-discover-page',
templateUrl: './movie-discover-page.html',
styleUrls: ['./movie-discover-page.css'],
})
export class MovieDiscoverPage implements OnInit {
genreList: Genre[] = [];
selectedGenreId?: number;
moviesOrTv: Movie[] = [];
mediaType: 'movie' | 'tv' = 'movie'; 

constructor(
private genresService: GenresService,
private discoverService: DiscoverService
) {}

ngOnInit(): void {
this.loadMovieGenres();
}

loadMovieGenres() {
  this.genresService.getGenres().subscribe((resp) => {
    this.genreList = resp.genres;
  });
}


onMediaTypeSelected(event: Event) {
const select = event.target as HTMLSelectElement;
this.mediaType = select.value as 'movie' | 'tv';
this.selectedGenreId = undefined;
this.moviesOrTv = [];
}

onGenreSelected(event: Event) {
  const select = event.target as HTMLSelectElement;
  const genreId = +select.value;
  this.selectedGenreId = genreId;

  this.discoverService
    .getByGenre(this.mediaType, genreId)
    .subscribe((resp) => (this.moviesOrTv = resp.results));
}

}
