import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundError } from 'rxjs';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'home',canActivate:[authGuard], component:HomeComponent},
  {path:'product-details/:id',canActivate:[authGuard],component:ProductDetailsComponent},
  { path:'about',canActivate:[authGuard],component:AboutComponent},
  { path:'brands',canActivate:[authGuard],component:BrandsComponent},
  { path:'cart',canActivate:[authGuard],component:CartComponent},
  { path:'categories',canActivate:[authGuard],component:CategoriesComponent},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'**',canActivate:[authGuard],component:NotfoundComponent},

];
