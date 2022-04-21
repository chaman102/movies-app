import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTvComponent } from './items-tv.component';

describe('ItemsTvComponent', () => {
  let component: ItemsTvComponent;
  let fixture: ComponentFixture<ItemsTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
