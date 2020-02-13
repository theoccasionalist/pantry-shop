import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedTypeComponent } from './limited-type.component';

describe('LimitedTypeComponent', () => {
  let component: LimitedTypeComponent;
  let fixture: ComponentFixture<LimitedTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitedTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
