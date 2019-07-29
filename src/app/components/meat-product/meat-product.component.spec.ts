import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatProductComponent } from './meat-product.component';

describe('MeatProductComponent', () => {
  let component: MeatProductComponent;
  let fixture: ComponentFixture<MeatProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeatProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
