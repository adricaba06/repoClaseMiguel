export class DeleteMovieFromListdto {
    media_id: number;
   
    constructor(media_id: number){
        this.media_id = media_id;
    }

}

// https://developer.themoviedb.org/reference/list-remove-movie