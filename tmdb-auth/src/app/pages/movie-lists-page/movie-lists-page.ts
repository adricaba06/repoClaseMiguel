import { Component, inject, OnInit, signal, TemplateRef, WritableSignal } from '@angular/core';
import { ListOfMoviesService } from '../../services/list-of-movies-service';
import { ListOfMovies } from '../../models/interfaces/list.interface';
import { DiscoverService } from '../../services/discover-service';
import { AuthenticationService } from '../../services/authentication-service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieDiscover } from '../../models/interfaces/discover-movie-response.interface';
import { AddMovieDto } from '../../models/dto/add-movie.dto';

@Component({
  selector: 'app-movie-lists-page',
  imports: [NgbDatepickerModule],
  templateUrl: './movie-lists-page.html',
  styleUrl: './movie-lists-page.css',
})
export class MovieListsPage implements OnInit {
  listOfMovies: ListOfMovies[] = [];
  movieList: MovieDiscover[] = [];
  listId!: number;

  constructor(
    private listService: ListOfMoviesService,
    private discoverService: DiscoverService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = localStorage.getItem('account_id');
    this.listService.getUserListOfMovies(id!).subscribe((resul) => {
      this.listOfMovies = resul.results;
      this.showMovies();
    });
  }

  getImageUrl(posterPath: string) {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  }

  navigateToDetails(id: number) {
    this.router.navigate(['list', id]);
  }

  deleteList(list_id: number) {
    console.log(list_id);
    this.listService.deleteList(list_id).subscribe((resp) => {
      console.log('Lista borrada');
    });
  }

  showMovies() {
    this.discoverService.getPopularMovies().subscribe((resp) => {
      for (let i = 0; i < 4; i++) {
        this.movieList.push(resp.results[i]);
      }
    });
  }

  getId(idList: number) {
    this.listId = idList;
    console.log("ID ACTUAL: " + this.listId)
  }

  addMovie(movie_id: number) {
    var dto = new AddMovieDto(movie_id);
    this.listService.addMovieToList(this.listId, dto).subscribe((resp) => {
      console.log('Se ha añadido una peli');
    });
  }

  //modal

  private modalService = inject(NgbModal);
  closeResult: WritableSignal<string> = signal('');

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult.set(`Closed with: ${result}`);
      },
      (reason) => {
        this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
      }
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
