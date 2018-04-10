import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinhaComponent } from './timelinha.component';

describe('TimelinhaComponent', () => {
  let component: TimelinhaComponent;
  let fixture: ComponentFixture<TimelinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
