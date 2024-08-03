import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart-service/cart.service';
import { Book } from '../services/book-service/book'; 
import { Observable,Subject } from "rxjs";  

import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { BookService } from '../services/book-service/book.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  books: Observable<Book[]>;

  dtTrigger: Subject<any>= new Subject();  
  book : Book=new Book(); 
  bid:number;
  booksArray: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private bookService:BookService
  ) { }

  
  addToCart(book) {
    window.alert('Your book has been added to the cart!');
    this.cartService.addToCart(book);
  }

  ngOnInit() {
    
    this.bid = this.route.snapshot.params.bookId;  

    this.bookService.getBook(this.bid).subscribe(data =>{
      this.book=data[0];
      //Set Book Image
      this.book.bookImage=this.book.bookName.toLowerCase().replace(/ /g,"-");
      this.dtTrigger.next(null);
    }) 


  }
}
