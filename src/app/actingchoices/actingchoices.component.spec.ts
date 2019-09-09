import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActingchoicesComponent } from './actingchoices.component';

describe('ActingchoicesComponent', () => {
  let component: ActingchoicesComponent;
  let fixture: ComponentFixture<ActingchoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActingchoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActingchoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
