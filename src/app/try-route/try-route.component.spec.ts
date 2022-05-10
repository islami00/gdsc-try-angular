import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryRouteComponent } from './try-route.component';

describe('TryRouteComponent', () => {
  let component: TryRouteComponent;
  let fixture: ComponentFixture<TryRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
