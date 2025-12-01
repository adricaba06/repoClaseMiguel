export interface ListOfMoviesResponse {
  page: number
  results: ListOfMovies[]
  total_pages: number
  total_results: number
}

export interface ListOfMovies {
  description: string
  favorite_count: number
  id: number
  item_count: number
  iso_639_1: string
  list_type: string
  name: string
  poster_path?: string
}
