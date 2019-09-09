import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActingselectComponent } from './actingselect.component';

describe('ActingselectComponent', () => {
  let component: ActingselectComponent;
  let fixture: ComponentFixture<ActingselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActingselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActingselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
