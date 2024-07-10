import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../services/book-service/book';
import { Subject, Observable } from 'rxjs';
import {FormControl,FormGroup,FormsModule,Validators} from '@angular/forms'; 
import { BookService } from '../services/book-service/book.service';


@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  bookid: number;
  booklist:any;
  book : Book=new Book();
  books: Observable<Book[]>;
  dtTrigger: Subject<any>= new Subject();
  isupdated = false;  
  
  constructor(
    private route: ActivatedRoute,
    private bookService:BookService,
  ) { }

  ngOnInit() {
    this.bookid = this.route.snapshot.params.bookId;  

    this.bookService.getBook(this.bookid).subscribe(data =>{  
      this.book=data[0];  
      this.dtTrigger.next();  
      }) 
  }
  
  //Update Book 
  updateBook(id: number){  
    this.bookService.getBook(id).subscribe(data => {      
          this.booklist=data           
        },  
        error => console.log(error));  
  }  

  //Book Update Form
  bookupdateform=new FormGroup({  
    book_id:new FormControl(),  
    book_name:new FormControl(),  
    year_published:new FormControl(),  
    book_genre:new FormControl(),
    book_description:new FormControl()   
  });  

  //Book Update Method
  updateTheBook(updbook){    
   this.book.bookId=this.BookId.value;  
   this.book.bookName=this.BookName.value;  
   this.book.yearPublished=this.year_published.value;  
   this.book.bookGenre=this.BookGenre.value;  
   this.book.bookDescription=this.BookDescription.value;
   console.log(this.year_published.value); 
   console.log(this.book); 

   this.bookid = this.route.snapshot.params.bookId;

   this.bookService.updateBook(this.bookid,this.book).subscribe(data => {       
      this.isupdated=true;  
   
      console.log(this.book); 

      this.bookService.getBook(this.bookid).subscribe(data =>{  
        this.books=data 
        console.log(this.books) ;
        })  
    },  
    error => console.log(error)); 

  }


  //Getter Methods
  get BookId(){  
    return this.bookupdateform.get('book_id');  
  }

  get BookName(){  
   return this.bookupdateform.get('book_name');  
  }  

  get year_published(){  
    return this.bookupdateform.get('year_published');  
  }   

  get BookGenre(){  
   return this.bookupdateform.get('book_genre');  
  }  

  get BookDescription(){  
    return this.bookupdateform.get('book_description');  
  }  

  
  changeisUpdate(){  
    this.isupdated=false;  
  }  

 
}
