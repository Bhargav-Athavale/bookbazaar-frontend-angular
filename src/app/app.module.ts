import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from './services/book-service/book.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({ declarations: [
        AppComponent,
        TopBarComponent,
        RoutingComponents,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule], providers: [BookService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
