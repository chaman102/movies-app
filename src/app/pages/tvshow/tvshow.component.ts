import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tvshow } from '../../models/tvshow';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
  tvId:any;
  show: Tvshow | null = null;
  constructor(private route:ActivatedRoute,private moviesService:MoviesService) { }

  ngOnInit(): void { this.route.params.pipe().subscribe(({ id }) => {
    //console.log('id', id)
    this.getTv(id);
  });
  }
  getTv(id: string) {
    this.moviesService.getTv(id).subscribe((movieData) => {
      console.log('data', movieData);
      this.show = movieData;
    });
  }
}
