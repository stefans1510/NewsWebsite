import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent implements OnInit{

  articles: any[] = [];
  query: string = '';

  constructor(private api: NewsapiService) {}

  search() {
    if (this.query.trim() === '') {
      this.articles = [];
      return;
    }
    
    this.api.searchNews(this.query).subscribe(result => {
      this.articles = result.articles
    })
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
