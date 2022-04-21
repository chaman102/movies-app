import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBannerTvComponent } from './items-banner-tv.component';

describe('ItemsBannerTvComponent', () => {
  let component: ItemsBannerTvComponent;
  let fixture: ComponentFixture<ItemsBannerTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsBannerTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsBannerTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
