import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToFamilyModalComponent } from './back-to-family-modal.component';

describe('BackToFamilyModalComponent', () => {
  let component: BackToFamilyModalComponent;
  let fixture: ComponentFixture<BackToFamilyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToFamilyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToFamilyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
