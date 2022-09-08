import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientSeparatorComponent } from './gradient-separator.component';

describe('GradientSeparatorComponent', () => {
  let component: GradientSeparatorComponent;
  let fixture: ComponentFixture<GradientSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradientSeparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
