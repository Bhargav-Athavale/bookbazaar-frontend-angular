import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items=[];

  //Add To Cart
  addToCart(book: any) {
    this.items.push(book);
  }

  //Get Cart Items
  getItems() {
    return this.items;
  }

  //Clear Cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
