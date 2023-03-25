import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit{

  constructor(private api: NewsapiService) {}

  sportsHeadlinesData: any[] = [];

  ngOnInit(): void {
    this.api.getSportsHeadlines().subscribe(result => {
      console.log(result);
      this.sportsHeadlinesData = result.articles;
    })
  }
}
