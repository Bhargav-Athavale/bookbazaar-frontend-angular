import { Component, OnInit } from "@angular/core";
import { Book } from "../services/book-service/book";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../services/cart-service/cart.service";
import { CheckoutService } from "../services/checkout-service/checkout.service";
import { Observable, Subject } from "rxjs";
import { BookService } from "../services/book-service/book.service";

@Component({
  selector: "app-booklist",
  templateUrl: "./booklist.component.html",
  styleUrls: ["./booklist.component.css"],
})
export class BooklistComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private bookservice: BookService
  ) {}

  booksArray: any[] = [];
  dtTrigger: Subject<any> = new Subject();

  books:Book[];
  book: Book = new Book();
  deleteMessage = false;
  booklist: any;
  isupdated = false;

  ngOnInit() {
    this.isupdated = false;

    this.bookservice.getBookList().subscribe((data) => {

      //Set Book Data
      this.books = data;
      //Set Book Image
      this.books.forEach(function(val){
        val.bookImage=val.bookName.toLowerCase().replace(/ /g,"-");
      });

      this.dtTrigger.next(null);
    });
  }

  buy() {
    window.alert("The book has been brought!");
  }

  //Add To Cart
  addToCart(book) {
    window.alert("Your books have been added to the cart!");
    this.cartService.addToCart(book);
  }

  //Add To Checkout
  addToCheckout(book) {
    window.alert("Your books have been added to checkout!");
    this.checkoutService.addToCheckout(book);
  }
}
