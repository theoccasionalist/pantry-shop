import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { FamilyComponent } from './components/family/family.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './guards/auth.guard';
import { FamilyGuard } from './guards/family.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'callback', component: CallbackComponent},
  {path: 'login', component: LoginComponent},
  {path: 'family', component: FamilyComponent, canActivate: [AuthGuard]},
  // {path: 'shop', component: ShopComponent, canActivate: [AuthGuard, FamilyGuard]},
  {path: 'shop', component: ShopComponent, canActivate: [AuthGuard]},
  // {path: 'cart', component: CartComponent, canActivate: [AuthGuard, FamilyGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
