import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiService } from './service/newsapi.service';
import { ShortPipe } from './short.pipe';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { PoliticsNewsComponent } from './politics-news/politics-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SearchNewsComponent } from './search-news/search-news.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestNewsComponent,
    ShortPipe,
    SportsNewsComponent,
    PoliticsNewsComponent,
    BusinessNewsComponent,
    SearchNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
