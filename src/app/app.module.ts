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
  MatRadioModule, MatSelectModule, MatSnackBarModule, MatProgressSpinnerModule, MatTableModule,
  MatToolbarModule} from '@angular/material';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { FamilyComponent } from './components/family/family.component';
import { LoginComponent } from './components/login/login.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ProductComponent } from './components/product/product.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';
import { QuestionsModalComponent } from './components/questions-modal/questions-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShopComponent,
    FamilyComponent,
    LoginComponent,
    SubmissionComponent,
    NavbarComponent,
    CallbackComponent,
    ProductComponent,
    ProductTypeComponent,
    QuestionsModalComponent
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
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  entryComponents: [
    QuestionsModalComponent
  ],
  providers: [ViewportRuler],
  bootstrap: [AppComponent]
})
export class AppModule { }
