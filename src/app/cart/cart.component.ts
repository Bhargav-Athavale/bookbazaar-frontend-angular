import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CheckoutService } from '../services/checkout-service/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any
  itemlist:any;

  constructor(
    private cartService: CartService,
    private checkoutService:CheckoutService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.itemlist=this.cartService.getItems();
  }

  addToCheckout(itemlist) {
    window.alert('Your books have been added to checkout!');
    this.checkoutService.addToCheckout(itemlist);
  }

}
