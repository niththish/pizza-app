import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PizzasComponent } from './user/pizzas/pizzas.component';
import { CartComponent } from './user/cart/cart.component';
import { OrdersComponent } from './user/orders/orders.component';
import { EditPizzaComponent } from './admin/edit-pizza/edit-pizza.component';
import { AddPizzaComponent } from './admin/add-pizza/add-pizza.component';
import { AdminPizzasComponent } from './admin/pizzas/pizzas.component';
import { AdminOrdersComponent } from './admin/orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PizzasComponent,
    CartComponent,
    OrdersComponent,
    AdminPizzasComponent,
    EditPizzaComponent,
    AddPizzaComponent,
    AdminOrdersComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
