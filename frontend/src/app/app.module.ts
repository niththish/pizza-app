import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { NavbarComponent } from './user/navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavbarComponent } from './admin/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    PizzasComponent,
    CartComponent,
    OrdersComponent,
    AdminComponent,
    AdminPizzasComponent,
    EditPizzaComponent,
    AddPizzaComponent,
    AdminOrdersComponent,
    NavbarComponent,
    AdminNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
