import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class QuoteService {

  constructor(private http: HttpClient) { }
  getQuoteOfTheDay() {
    return this.http.get('https://favqs.com/api/qotd');
  }
}
