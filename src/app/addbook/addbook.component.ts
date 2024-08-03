import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
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

  booksaveform=new UntypedFormGroup({  
    book_name:new UntypedFormControl('' , [Validators.required] ),  
    year_published:new UntypedFormControl('' , [Validators.required]),  
    book_genre:new UntypedFormControl('' , [Validators.required]),
    book_description:new UntypedFormControl('',[Validators.required])
  });  


 
  save() {  
    this.bookService.createBook(this.book).subscribe(
    data => console.log(data), 
    error => console.log(error));  
    this.book = new Book();  
  }  

}
