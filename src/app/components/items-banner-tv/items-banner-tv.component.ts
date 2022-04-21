import { Component, OnInit,Input } from '@angular/core';
import { Tvshow } from 'src/app/models/tvshow';

@Component({
  selector: 'items-banner-tv',
  templateUrl: './items-banner-tv.component.html',
  styleUrls: ['./items-banner-tv.component.scss']
})
export class ItemsBannerTvComponent implements OnInit {
  @Input() items: Tvshow[] = [];
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
