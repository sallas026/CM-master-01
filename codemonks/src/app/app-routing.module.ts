import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from 'src/contact-us/contact-us.component';
import { CustomersComponent } from 'src/customers/customers.component';
import { HomeComponent } from 'src/home/home.component';
import { HeaderComponent } from 'src/layout/header/header.component';
import { LoginPageComponent } from 'src/login-page/login-page.component';
import { productsComponent } from 'src/products/products.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'product', component: productsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'customers', component: CustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
