import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';


const routes: Routes = [
  { path: '', redirectTo: 'books-list', pathMatch: 'full'},
  { path: 'books-list',component:BooklistComponent},
  { path: 'book/:bookId',component:BookdetailComponent},
  { path: 'cart', component: CartComponent},
  { path: 'checkout',component:CheckoutComponent},
  { path: 'update/:bookId',component:UpdatebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents=[
  BooklistComponent,
  BookdetailComponent,
  CartComponent,
  CheckoutComponent,
  AddbookComponent,
  UpdatebookComponent,
 ]