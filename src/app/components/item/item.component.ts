import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGE_SIZE } from '../../constants/images-sizes';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;
  imagesSizes=IMAGE_SIZE;
  constructor() {}

  ngOnInit(): void {}
}
