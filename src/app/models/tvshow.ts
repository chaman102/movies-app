export interface Tvshow {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  name:string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  release_date:string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TvshowDto {
  page: number;
  results: Tvshow[];
  total_results: number;
  total_pages: number;
}
