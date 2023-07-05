import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from 'src/contact-us/contact-us.component';
import { CustomersComponent } from 'src/customers/customers.component';
import { HomeComponent } from 'src/home/home.component';
import { LoginPageComponent } from 'src/login-page/login-page.component';
import { ProductsComponent } from 'src/products/products.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
