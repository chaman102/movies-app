import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Tvshow } from 'src/app/models/tvshow';
import { IMAGE_SIZE } from '../../constants/images-sizes';
import { Movie } from '../../models/movie';
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() tvitems: Tvshow[] = [];
  readonly imagesSizes = IMAGE_SIZE;
  @Input() isBanner: boolean = false;
  currentSlideIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }
}
