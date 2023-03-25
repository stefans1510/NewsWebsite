import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http: HttpClient) { }

  latestNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3c7779a2535f42d29dd269509ffbaa54';
  sportsNews = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3c7779a2535f42d29dd269509ffbaa54';
  politicsNews = 'https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=3c7779a2535f42d29dd269509ffbaa54';
  businessNews = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3c7779a2535f42d29dd269509ffbaa54';

  getLatestHeadlines(): Observable<any> {
    return this._http.get(this.latestNews);
  }

  getSportsHeadlines(): Observable<any> {
    return this._http.get(this.sportsNews);
  }

  getPoliticsHeadlines(): Observable<any> {
    return this._http.get(this.politicsNews);
  }

  getBusinessHeadlines(): Observable<any> {
    return this._http.get(this.businessNews);
  }

  searchNews(query: string = ''): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=3c7779a2535f42d29dd269509ffbaa54`;
    return this._http.get(url);
  }
}

