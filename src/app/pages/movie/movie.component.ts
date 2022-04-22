import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Movie, MovieVideo,MovieImages, MovieCredits } from '../../models/movie';
import { IMAGE_SIZE } from '../../constants/images-sizes';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  imagesSizes = IMAGE_SIZE;
  movie: Movie | null = null;
  movieVideos:MovieVideo[]  = [];
  movieImages:MovieImages | null = null;
  movieCredits:MovieCredits | null = null;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe().subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }
  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
  getMovieVideos(id: number) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideosData) => {
      this.movieVideos = movieVideosData;
     // console.log('first', this.movieVideos)
    });
  }
  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
     // console.log('first', this.movieVideos)
    });
  }
  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
     // console.log('first', this.movieVideos)
    });
  }
}
