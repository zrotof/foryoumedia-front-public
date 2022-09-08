import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBestProgramsComponent } from './home-best-programs.component';

describe('HomeBestProgramsComponent', () => {
  let component: HomeBestProgramsComponent;
  let fixture: ComponentFixture<HomeBestProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBestProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBestProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
