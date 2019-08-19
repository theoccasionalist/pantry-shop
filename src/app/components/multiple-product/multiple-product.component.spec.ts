import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleProductComponent } from './multiple-product.component';

describe('MultipleProductComponent', () => {
  let component: MultipleProductComponent;
  let fixture: ComponentFixture<MultipleProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
