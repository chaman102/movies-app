import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Movie } from '../../models/movie';
import { IMAGE_SIZE } from '../../constants/images-sizes';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movieId: any;
  imagesSizes = IMAGE_SIZE;
  movie: Movie | null = null;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe().subscribe(({ id }) => {
      this.getMovie(id);
    });
  }
  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
}
