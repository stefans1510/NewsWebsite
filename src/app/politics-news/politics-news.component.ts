import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-politics-news',
  templateUrl: './politics-news.component.html',
  styleUrls: ['./politics-news.component.css']
})
export class PoliticsNewsComponent implements OnInit{

  constructor(private api: NewsapiService) {}

  politicsHeadlinesData: any[] = [];

  ngOnInit(): void {
    this.api.getPoliticsHeadlines().subscribe(result => {
      console.log(result);
      this.politicsHeadlinesData = result.articles;
    })
  }
}
