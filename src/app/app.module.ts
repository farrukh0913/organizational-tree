import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BEOrgchartModule } from 'be-orgchart';
import { HttpClientModule } from '@angular/common/http';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { PanZoomChartComponent } from './components/pan-zoom/pan.component';
import { OrgchartModule } from '@dabeng/ng-orgchart';

@NgModule({
  declarations: [ AppComponent, ChartComponent, PanZoomChartComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BEOrgchartModule,
    NgxOrgChartModule,
    OrgchartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
