import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollingModule, ViewportRuler} from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatExpansionModule,
  MatInputModule, MatFormFieldModule, MatNativeDateModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTableModule,
  MatToolbarModule } from '@angular/material';
import { CartComponent } from './components/cart/cart.component';
import { BulkProductComponent } from './components/bulk-product/bulk-product.component';
import { AfterSchoolProductComponent } from './components/after-school-product/after-school-product.component';
import { ChoiceProductComponent } from './components/choice-product/choice-product.component';
import { ShopComponent } from './components/shop/shop.component';
import { FamilyComponent } from './components/family/family.component';
import { LoginComponent } from './components/login/login.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CallbackComponent } from './components/callback/callback.component';
import { MeatProductComponent } from './components/meat-product/meat-product.component';
import { DairyProductComponent } from './components/dairy-product/dairy-product.component';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    BulkProductComponent,
    AfterSchoolProductComponent,
    ChoiceProductComponent,
    ShopComponent,
    FamilyComponent,
    LoginComponent,
    SubmissionComponent,
    NavbarComponent,
    CallbackComponent,
    MeatProductComponent,
    DairyProductComponent,
    RecipeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [ViewportRuler],
  bootstrap: [AppComponent]
})
export class AppModule { }
