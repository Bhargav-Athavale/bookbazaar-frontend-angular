import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: any[];

  constructor(
    private checkoutService:CheckoutService
  ) { }

  ngOnInit() {
    this.items = this.checkoutService.getItems();
   
  }

}
