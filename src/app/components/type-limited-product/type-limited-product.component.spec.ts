import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeLimitedProductComponent } from './type-limited-product.component';

describe('TypeLimitedProductComponent', () => {
  let component: TypeLimitedProductComponent;
  let fixture: ComponentFixture<TypeLimitedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeLimitedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeLimitedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
