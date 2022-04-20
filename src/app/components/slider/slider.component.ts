import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { IMAGE_SIZE } from '../../constants/images-sizes';
import { Movie } from '../../models/movie';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  readonly imagesSizes = IMAGE_SIZE;
  currentSlideIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    //console.log('Slider list', this.items)
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    }, 5000);
  }
}
