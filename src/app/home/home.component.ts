import {Component, Injectable, OnInit} from '@angular/core';
import {QuoteService} from '../quote.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit {
  public qotd: Object = {};
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.getQuote();
  }
  public changeQuote () {
    console.log('a');
    this.getQuote();
  }
  public getQuote() {
    const qotd = this.quoteService.getQuoteOfTheDay();
    qotd.subscribe(data => {
      this.qotd = data;
    });
  }
}
