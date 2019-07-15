import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSchoolProductComponent } from './after-school-product.component';

describe('AfterSchoolProductComponent', () => {
  let component: AfterSchoolProductComponent;
  let fixture: ComponentFixture<AfterSchoolProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterSchoolProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterSchoolProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
