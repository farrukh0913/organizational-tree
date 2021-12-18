import {
  BEOrgchartComponent,
  ID3Node,
  INodesJson,
  ID3OrgChartOptions
} from 'be-orgchart';

// Required only of nodes are requested via hhtp request
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss'],
    // encapsulation: ViewEncapsulation.None,
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChartComponent implements OnInit, OnChanges {
  @ViewChild(BEOrgchartComponent) chart!: BEOrgchartComponent;
  @Input() data: any[] = [];
  nodes: ID3Node[] = [];

  colors: string[] = [
    '#54dfc6', '#9ee0f9', '#617c87', '#721d2e', '#a032d2',
    '#f7cac9', '#dec2cb', '#c5b9cd', '#abb1cf', '#92a8d1'
  ]

  fonts: string[] = [ // must be strings
    'Times New Roman', 'Georgia', 'Arial', 'Verdana',
    'Courier New', 'Lucida Console', 'Tahoma'
  ]

  scales: number[] = [ // must be between 0 and 1
    0.8, 0.6, 0.4, 0.2, 0.1, 0
  ]

  chartOptions: ID3OrgChartOptions = {
    backgroundColor: ''
  }

  constructor(protected http: HttpClient) { }

  ngOnInit(){}

ngOnChanges(){
  this.nodes = [...this.data];
  this.testing;
}

  ngAfterViewInit() {
    this.nodes = [...this.data];
    this.testing;
  }

  testing(){
    this.chart.onNodeClick.subscribe(
      (node: ID3Node) => {
        if (node.nodeId == 'id0101') {
          const currentBGColor: any = this.colors.shift();

          console.log('Changing bg color');
          this.chart.assignOptions({
            backgroundColor: currentBGColor
          })

          this.chart.chart.render();

          this.colors.push(currentBGColor);
        }

        if (node.nodeId == 'id0102') {
          const currentFont: any = this.fonts.shift();

          console.log('Changing Font');
          this.chart.assignOptions({
            defaultFont: currentFont
          })

          this.chart.chart.render();

          this.fonts.push(currentFont);
        }

        if (node.nodeId == 'id0103') {
          const currentScale: any = this.scales.shift();

          console.log('Changing Scale');
          this.chart.assignOptions({
            nodeHorizontalSpaceScale: currentScale
          })

          this.chart.chart.render();

          this.scales.push(currentScale);
        }
      }
    )
  }

}






