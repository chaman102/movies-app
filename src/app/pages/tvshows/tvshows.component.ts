import { Component, OnInit } from '@angular/core';
import { Tvshow } from 'src/app/models/tvshow';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { COMMON } from '../../constants/common';
@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
  movies: Tvshow[] = [];
  genresName: any;
  genreId: string | null = null;
  constructor( private route: ActivatedRoute,private moviesservice: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.route.queryParams.subscribe((params) => {
        this.genresName = params['name'];
        });
        this.getTvByGenre(genreId, 1, COMMON.rows);
      } else {
        this.genresName="Movies"
        this.getPageTvshows(1, COMMON.rows);
      }
    });

  }
  getPageTvshows(page:number=1,count:number)
{
  this.moviesservice.getPageTvshow(page,count).subscribe(movies=>{
    this.movies =movies;
  });
}
getTvByGenre(genreId: string, page: number = 1, count: number) {
  this.moviesservice
    .getTvByGenre(genreId, page, count)
    .subscribe((movies) => {
      this.movies = movies;
    });
}
paginate(event:any) {
  const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getTvByGenre(this.genreId, pageNumber, COMMON.rows);
    } else {
      this.getPageTvshows(pageNumber, COMMON.rows);
    }
}
}
