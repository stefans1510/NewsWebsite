import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent {
  
  constructor(private api: NewsapiService) {}

  businessHeadlinesData: any[] = [];

  ngOnInit(): void {
    this.api.getBusinessHeadlines().subscribe(result => {
      console.log(result);
      this.businessHeadlinesData = result.articles;
    })
  }

}
