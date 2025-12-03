import { Component, OnInit } from '@angular/core';
import { ListOfMoviesService } from '../../services/list-of-movies-service';
import { ActivatedRoute } from '@angular/router';
import { MoviesInList } from '../../models/interfaces/movie-List-details.interface';
import { DeleteMovieFromListdto } from '../../models/dto/delete-movie.dto';

@Component({
  selector: 'app-movie-list-details',
  imports: [],
  templateUrl: './movie-list-details.html',
  styleUrl: './movie-list-details.css',
})
export class MovieListDetails  implements OnInit{

  movies: MoviesInList[] = [];
  listId = 0

  constructor(private listOfMoviesService: ListOfMoviesService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(
      params =>{
        const id = params['id']
        this.listId = id;
      }
    )

    this.getListDetails()
  }

  public getListDetails(){
    this.listOfMoviesService.getUserListOfMoviesDetails(this.listId).subscribe((resp) =>{
      this.movies = resp.items
    })
  }
  

  public removeMovieFromList(movie_id: number){
    console.log(movie_id)
    var dto = new DeleteMovieFromListdto(movie_id)
    this.listOfMoviesService.deleteMovieFromList(this.listId, dto).subscribe((resp) =>{
      console.log("se ha borrao la pelicula")
    })
    console.log(this.listId)
  }

  

}
