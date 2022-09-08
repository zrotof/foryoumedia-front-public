import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayItemComponent } from './replay-item.component';

describe('ReplayItemComponent', () => {
  let component: ReplayItemComponent;
  let fixture: ComponentFixture<ReplayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplayItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
