import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from "./home/home.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {QuoteService} from "./quote.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [HttpClient, QuoteService],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
