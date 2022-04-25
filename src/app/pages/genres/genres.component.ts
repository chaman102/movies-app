import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genres';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];
  genrestv: Genre[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMoviesGenres().subscribe((genresData) => {
      this.genres = genresData;
    });
    this.moviesService.getTvGenres().subscribe((genrestvData) => {
      this.genrestv = genrestvData;
    });
  }
}
