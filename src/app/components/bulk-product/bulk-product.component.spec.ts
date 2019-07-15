import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './../../app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatCardModule, MatExpansionModule, MatRadioModule} from '@angular/material';
import { BulkProductComponent } from './bulk-product.component';
import { By } from '@angular/platform-browser';
import { Product } from 'src/app/models/product.model';
import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';


class MockProductService {
  bulkProducts = [
        {id: 'bp01', name: 'Fresh Vegetables'},
        {id: 'bp02', name: 'Fresh Fruit'},
        {id: 'bp03', name: 'Milk'}
      ];
    findAllBulkProducts() {
      return this.bulkProducts;
  }
}

describe('BulkProductComponent', () => {
  let component: BulkProductComponent;
  let fixture: ComponentFixture<BulkProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatExpansionModule,
        MatRadioModule
      ],
      declarations: [ BulkProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should add products to bulk cart and get products from bulk cart', () => {
    const service = new MockProductService();
    const bulkProducts = service.findAllBulkProducts();
    component.updateBulkCart(bulkProducts[0]);
    expect(component.bulkCart.length).toEqual(1);
    expect(component.getBulkComponentCart()).toEqual([{id: 'bp01', name: 'Fresh Vegetables'}]);
    component.updateBulkCart(bulkProducts[1]);
    expect(component.bulkCart.length).toEqual(2);
    expect(component.getBulkComponentCart()).toEqual([{id: 'bp01', name: 'Fresh Vegetables'},
    {id: 'bp02', name: 'Fresh Fruit'}]);
  });

  it('Should remove products if already in bulk cart', () => {
    const service = new MockProductService();
    const bulkProducts = service.findAllBulkProducts();
    component.updateBulkCart(bulkProducts[0]);
    component.updateBulkCart(bulkProducts[1]);
    expect(component.bulkCart.length).toEqual(2);
    component.updateBulkCart(bulkProducts[0]);
    expect(component.bulkCart.length).toEqual(1);
    expect(component.bulkCart).toEqual([{id: 'bp02', name: 'Fresh Fruit'}]);
    component.updateBulkCart(bulkProducts[1]);
    expect(component.bulkCart.length).toEqual(0);
    expect(component.getBulkComponentCart()).toEqual([]);
  });

  it ('Should update mat panel description when open state changes', () => {
    const matPanelDescription = document.querySelector('mat-panel-description');
    expect(matPanelDescription.textContent.trim()).toBe('Click here to open');
    component.panelOpenState = true;
    fixture.detectChanges();
    expect(matPanelDescription.textContent.trim()).toBe('Click here to close');
  });

  it ('Mat card title should have product name', () => {
    const matCardTitle = document.querySelector('mat-card-title');
    expect(matCardTitle.textContent.trim()).toBe('Fresh Vegetables');
  });

  it ('Should update mat card content when bulk cart updates', () => {
    // figure this out; remove take logic out of binding eventually
  });
});
