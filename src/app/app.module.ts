import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollingModule, ViewportRuler} from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClickOutsideModule } from 'ng-click-outside';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { FamilyComponent } from './components/family/family.component';
import { LoginComponent } from './components/login/login.component';
import { SubmitModalComponent } from './components/submit-modal/submit-modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CallbackComponent } from './components/callback/callback.component';
import { QuestionsModalComponent } from './components/questions-modal/questions-modal.component';
import { UpdateModalComponent } from './components/update-modal/update-modal.component';
import { IntroModalComponent } from './components/intro-modal/intro-modal.component';
import { TypeComponent } from './components/type/type.component';
import { LimitedTypeComponent } from './components/limited-type/limited-type.component';
import { BaseProductComponent } from './components/base-product/base-product.component';
import { LimitedProductComponent } from './components/limited-product/limited-product.component';
import { TypeLimitedProductComponent } from './components/type-limited-product/type-limited-product.component';
import { SubTypeProductComponent } from './components/sub-type-product/sub-type-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShopComponent,
    FamilyComponent,
    LoginComponent,
    SubmitModalComponent,
    NavbarComponent,
    CallbackComponent,
    QuestionsModalComponent,
    UpdateModalComponent,
    IntroModalComponent,
    TypeComponent,
    LimitedTypeComponent,
    BaseProductComponent,
    LimitedProductComponent,
    TypeLimitedProductComponent,
    SubTypeProductComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ClickOutsideModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  entryComponents: [
    IntroModalComponent,
    SubmitModalComponent,
    QuestionsModalComponent,
    UpdateModalComponent
  ],
  providers: [ViewportRuler],
  bootstrap: [AppComponent]
})
export class AppModule { }
