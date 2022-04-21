import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { COMMON } from '../../constants/common';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesservice: MoviesService) {}

  ngOnInit(): void {
    this.getPageMovie(1,COMMON.rows);
  }
  getPageMovie(page:number=1,count:number)
  {
    this.moviesservice.searchMovies(page,count).subscribe(movies=>{
      this.movies =movies;
    });
  }
  paginate(event:any) {
    this.getPageMovie(event.page+1,COMMON.rows)
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
   // console.log('event', event)
}
}
