import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from './services/book-service/book.service';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    RoutingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    MatIconModule 
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
