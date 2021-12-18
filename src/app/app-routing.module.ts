import { ChartComponent } from './components/chart/chart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanZoomChartComponent } from './components/pan-zoom/pan.component';

const routes: Routes = [
  { path: 'pan', component: PanZoomChartComponent },
  // { path: '', redirectTo: 'chart', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
