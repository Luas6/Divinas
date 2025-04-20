import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuacionesComponentComponent } from './actuaciones-component.component';

describe('ActuacionesComponentComponent', () => {
  let component: ActuacionesComponentComponent;
  let fixture: ComponentFixture<ActuacionesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuacionesComponentComponent]
    });
    fixture = TestBed.createComponent(ActuacionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
