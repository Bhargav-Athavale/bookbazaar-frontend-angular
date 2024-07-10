import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080/api/'; 

  constructor(private http:HttpClient) { }

  getBookList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'book-list');  
  }  
  
  createBook(book: Object): Observable<Object> {  
    return this.http.post(`${this.baseUrl}`+'add-book', book);  
  }  
  
  getBook(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}book/${id}`);  
  }  

  deleteBook(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}delete-book/${id}`, { responseType: 'text' });  
  }  
  
  updateBook(id: number, value: any): Observable<any> {  
    return this.http.put(`${this.baseUrl}update/${id}`, value);  
  }  
    

}
