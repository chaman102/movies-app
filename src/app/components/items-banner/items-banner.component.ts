import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() title: string = '';


  ngOnInit(): void {
    console.log('items', this.items)
  }

}
