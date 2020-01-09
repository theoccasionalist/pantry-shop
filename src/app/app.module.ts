import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollingModule, ViewportRuler} from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatExpansionModule,
  MatInputModule, MatFormFieldModule, MatNativeDateModule, MatOptionModule,
  MatRadioModule, MatSelectModule, MatProgressSpinnerModule, MatSnackBarModule, MatStepperModule, MatIconModule, MatTableModule,
  MatToolbarModule} from '@angular/material';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { FamilyComponent } from './components/family/family.component';
import { LoginComponent } from './components/login/login.component';
import { SubmitModalComponent } from './components/submit-modal/submit-modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ProductComponent } from './components/product/product.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';
import { QuestionsModalComponent } from './components/questions-modal/questions-modal.component';
import { UpdateModalComponent } from './components/update-modal/update-modal.component';

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
    ProductComponent,
    ProductTypeComponent,
    QuestionsModalComponent,
    UpdateModalComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
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
    SubmitModalComponent,
    QuestionsModalComponent,
    UpdateModalComponent
  ],
  providers: [ViewportRuler],
  bootstrap: [AppComponent]
})
export class AppModule { }
