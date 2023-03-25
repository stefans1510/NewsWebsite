import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit{
  
  constructor(private api: NewsapiService) {}

  latestHeadlinesData: any[] = [];

  ngOnInit(): void {
    this.api.getLatestHeadlines().subscribe(result => {
      console.log(result);
      this.latestHeadlinesData = result.articles;
    })
  }

}
