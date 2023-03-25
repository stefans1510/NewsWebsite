import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PoliticsNewsComponent } from './politics-news/politics-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';

const routes: Routes = [
  {path: '', component: LatestNewsComponent},
  {path: 'politics', component: PoliticsNewsComponent},
  {path: 'business', component: BusinessNewsComponent},
  {path: 'sports', component: SportsNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
