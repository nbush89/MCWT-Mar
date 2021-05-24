import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCounterComponent } from './people-counter.component';

describe('PeopleCounterComponent', () => {
  let component: PeopleCounterComponent;
  let fixture: ComponentFixture<PeopleCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
