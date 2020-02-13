import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTypeProductComponent } from './sub-type-product.component';

describe('SubTypeProductComponent', () => {
  let component: SubTypeProductComponent;
  let fixture: ComponentFixture<SubTypeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTypeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTypeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
