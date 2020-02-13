import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedProductComponent } from './limited-product.component';

describe('LimitedProductComponent', () => {
  let component: LimitedProductComponent;
  let fixture: ComponentFixture<LimitedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
