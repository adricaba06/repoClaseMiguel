import { Component, OnInit } from '@angular/core';
import { ListOfMoviesService } from '../../services/list-of-movies-service';
import { ListOfMovies } from '../../models/interfaces/list.interface';
import { DiscoverService } from '../../services/discover-service';
import { AuthenticationService } from '../../services/authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-lists-page',
  imports: [],
  templateUrl: './movie-lists-page.html',
  styleUrl: './movie-lists-page.css',
})
export class MovieListsPage implements OnInit {

  getElementos() {
  throw new Error('Method not implemented.');
  }

  listOfMovies: ListOfMovies[] = []

  constructor(private listService: ListOfMoviesService, private discoverService: DiscoverService, private authenticationService: AuthenticationService, private router: Router){}


  ngOnInit(): void {
    const id = localStorage.getItem('account_id')
    this.listService.getUserListOfMovies(id!).subscribe((resul)=>{
      this.listOfMovies = resul.results;
    })

  }

   getImageUrl(posterPath: string) {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  }

  navigateToDetails(id: number) {
    this.router.navigate(['list', id]);

}


}
