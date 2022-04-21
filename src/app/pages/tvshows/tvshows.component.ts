import { Component, OnInit } from '@angular/core';
import { Tvshow } from 'src/app/models/tvshow';
import { MoviesService } from '../../services/movies.service';
import { COMMON } from '../../constants/common';
@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
  movies: Tvshow[] = [];
  constructor(private moviesservice: MoviesService) { }

  ngOnInit(): void {
    this.getPageTvshows(1,COMMON.rows);
  }
  getPageTvshows(page:number=1,count:number)
{
  this.moviesservice.getPageTvshow(page,count).subscribe(movies=>{
    this.movies =movies;
  });
}
paginate(event:any) {
  this.getPageTvshows(event.page+1,COMMON.rows)
  //event.first = Index of the first record
  //event.rows = Number of rows to display in new page
  //event.page = Index of the new page
  //event.pageCount = Total number of pages
 // console.log('event', event)
}
}
