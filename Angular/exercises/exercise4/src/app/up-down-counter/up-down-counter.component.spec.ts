import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDownCounterComponent } from './up-down-counter.component';

describe('UpDownCounterComponent', () => {
  let component: UpDownCounterComponent;
  let fixture: ComponentFixture<UpDownCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpDownCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDownCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
