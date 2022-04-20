import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieDto } from '../../models/movie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topratedMovies: Movie[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
      //console.log('Popular', this.popularMovies);
    });

    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
      //console.log('upcoming', this.upcomingMovies);
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topratedMovies = movies;
      //console.log('Top rated', this.topratedMovies);
    });
  }
}
