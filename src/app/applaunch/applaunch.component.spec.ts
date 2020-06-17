import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplaunchComponent } from './applaunch.component';

describe('ApplaunchComponent', () => {
  let component: ApplaunchComponent;
  let fixture: ComponentFixture<ApplaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
