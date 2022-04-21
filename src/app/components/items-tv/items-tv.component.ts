import { Component, OnInit,Input } from '@angular/core';
import { Tvshow } from 'src/app/models/tvshow';
import { IMAGE_SIZE } from '../../constants/images-sizes';
@Component({
  selector: 'items-tv',
  templateUrl: './items-tv.component.html',
  styleUrls: ['./items-tv.component.scss']
})
export class ItemsTvComponent implements OnInit {
  @Input() itemData: Tvshow | null = null;
  imagesSizes=IMAGE_SIZE;
  constructor() { }

  ngOnInit(): void {
  }

}
