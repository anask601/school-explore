import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolExploreComponent } from './school-explore.component';

describe('SchoolExploreComponent', () => {
  let component: SchoolExploreComponent;
  let fixture: ComponentFixture<SchoolExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolExploreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
