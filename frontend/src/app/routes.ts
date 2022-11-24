import { Routes } from '@angular/router';
import { AddPizzaComponent } from './admin/add-pizza/add-pizza.component';
import { EditPizzaComponent } from './admin/edit-pizza/edit-pizza.component';
import { AdminOrdersComponent } from './admin/orders/orders.component';
import { AdminPizzasComponent } from './admin/pizzas/pizzas.component';
import { AuthguardGuard } from './guard/authguard.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './user/cart/cart.component';
import { OrdersComponent } from './user/orders/orders.component';
import { PizzasComponent } from './user/pizzas/pizzas.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'pizzas', component: PizzasComponent },
      { path: 'cart', component: CartComponent },
      { path: 'orders', component: OrdersComponent },
    ],
    canActivateChild: [AuthguardGuard],
  },
  {
    path: 'admin',
    component: AdminPizzasComponent,
    children: [
      { path: 'pizzas/edit', component: EditPizzaComponent },
      { path: 'pizzas/add', component: AddPizzaComponent },
      { path: 'orders', component: AdminOrdersComponent },
    ],
    canActivateChild: [AuthguardGuard],
  },
];
