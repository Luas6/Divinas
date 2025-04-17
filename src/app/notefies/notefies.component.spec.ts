import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotefiesComponent } from './notefies.component';

describe('NotefiesComponent', () => {
  let component: NotefiesComponent;
  let fixture: ComponentFixture<NotefiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotefiesComponent]
    });
    fixture = TestBed.createComponent(NotefiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
