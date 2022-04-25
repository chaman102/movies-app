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
        this.genresName="Movies"
        this.getPageMovie(1, COMMON.rows);
      }
    });
  }
  getPageMovie(page: number = 1, count: number) {
    this.moviesservice.searchMovies(page, count).subscribe((movies) => {
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
    } else {
      this.getPageMovie(pageNumber, COMMON.rows);
    }
  }
}
