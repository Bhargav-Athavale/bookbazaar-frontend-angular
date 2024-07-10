import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  items=[];

  //Add To Checkout
  addToCheckout(items: any) {
    this.items.push(items);
  }

  //Get Checkout Items
  getItems() {
    return this.items;
  }

  //Clear Checkout
  clearCheckout() {
    this.items = [];
    return this.items;
  }


  constructor() { }
}
