import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneLaunchComponent } from './standalone-launch.component';

describe('StandaloneLaunchComponent', () => {
  let component: StandaloneLaunchComponent;
  let fixture: ComponentFixture<StandaloneLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandaloneLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaloneLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
