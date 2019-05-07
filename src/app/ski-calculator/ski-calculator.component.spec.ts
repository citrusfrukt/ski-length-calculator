import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiCalculatorComponent } from './ski-calculator.component';

describe('SkiCalculatorComponent', () => {
  let component: SkiCalculatorComponent;
  let fixture: ComponentFixture<SkiCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
