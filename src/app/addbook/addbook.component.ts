import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../services/book-service/book';
import { BookService } from '../services/book-service/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private bookService:BookService) { }

  book : Book=new Book();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  

  booksaveform=new FormGroup({  
    book_name:new FormControl('' , [Validators.required] ),  
    year_published:new FormControl('' , [Validators.required]),  
    book_genre:new FormControl('' , [Validators.required]),
    book_description:new FormControl('',[Validators.required])
  });  


 
  save() {  
    this.bookService.createBook(this.book).subscribe(
    data => console.log(data), 
    error => console.log(error));  
    this.book = new Book();  
  }  

}
