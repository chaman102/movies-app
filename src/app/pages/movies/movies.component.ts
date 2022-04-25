import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { COMMON } from '../../constants/common';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genresName: any;
  searchValue: any | null = null;
  genreId: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private moviesservice: MoviesService
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.route.queryParams.subscribe((params) => {
          this.genresName = params['name'];
        });
        this.getMoviesByGenre(genreId, 1, COMMON.rows);
      } else {

        this.genresName = 'Movies';
        this.getPagedMovies(1, COMMON.rows);
      }
    });
  }
  getPagedMovies(page: number = 1, count: number,searchKeyword?: string) {
    this.moviesservice.searchMovies(page, count,searchKeyword).subscribe((movies) => {
    console.log('data', movies)
      this.movies = movies;
    });
  }
  getMoviesByGenre(genreId: string, page: number = 1, count: number) {
    this.moviesservice
      .getMoviesByGenre(genreId, page, count)
      .subscribe((movies) => {
        this.movies = movies;
      });
  }
  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber, COMMON.rows);
    }else {
      if (this.searchValue) {
        this.getPagedMovies(pageNumber,COMMON.rows, this.searchValue);
      } else {
        this.getPagedMovies(pageNumber,COMMON.rows);
      }
    }

  }
  serachChnaged()
  {
    if (this.searchValue) {

      this.getPagedMovies(1,COMMON.rows, this.searchValue);
    }
  }
}
