import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayContainerComponent } from './replay-container.component';

describe('ReplayContainerComponent', () => {
  let component: ReplayContainerComponent;
  let fixture: ComponentFixture<ReplayContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplayContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
