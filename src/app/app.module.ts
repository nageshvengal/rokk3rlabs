import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { NewsComponent } from './news/news.component';

const appRoutes: Routes = [
  { path:'', component:AnalyticsComponent },
  { path:'news', component:NewsComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    AnalyticsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
