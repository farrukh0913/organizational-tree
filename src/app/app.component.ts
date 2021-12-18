import {
  BEOrgchartComponent,
  ID3Node,
  INodesJson,
  ID3OrgChartOptions
} from 'be-orgchart';

// Required only of nodes are requested via hhtp request
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import OrgChart from "@balkangraph/orgchart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(protected http: HttpClient) { }
  data: any[] = [
    {
      "nodeId": "root",
      "parentNodeId": "",
      "nodeImage": {
        "type": "icon",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "name": "faSitemap",
        "scale": 0.6
      },
      "title": "BE Orgchart",
      "description": "Expand for caracteristics",
      "expanded": false
    },
    {
      "nodeId": "id01",
      "parentNodeId": "root",
      "nodeImage": {
        "type": "icon",
        "name": "faCogs",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Configurable",
      "description": "See below",
      "childrenDist": "vertical"
    },
    {
      "nodeId": "id0101",
      "parentNodeId": "id01",
      "nodeImage": {
        "type": "icon",
        "name": "faPaintRoller",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Background Color",
      "description": "Press here to see",
      "childrenDist": "vertical"
    },
    {
      "nodeId": "id0102",
      "parentNodeId": "id01",
      "nodeImage": {
        "type": "icon",
        "name": "faFont",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Default Font",
      "description": "Press here to see"
    },
    {
      "nodeId": "id0103",
      "parentNodeId": "id01",
      "nodeImage": {
        "type": "icon",
        "name": "faArrowsAltH",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Change nodes separation",
      "description": "Press here to see",
      "childrenDist": "vertical"
    },
    {
      "nodeId": "id02",
      "parentNodeId": "root",
      "nodeImage": {
        "type": "icon",
        "name": "faSquare",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Canvas",
      "description": "On canvas....",
      "childrenDist": "vertical"
    },
    {
      "nodeId": "id0201",
      "parentNodeId": "id02",
      "nodeImage": {
        "type": "icon",
        "name": "faArrowsAlt",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Draggable",
      "description": "You can simply move it"
    },
    {
      "nodeId": "id0202",
      "parentNodeId": "id02",
      "nodeImage": {
        "type": "icon",
        "name": "faExpand",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Fitable",
      "description": "Press fit button... (UP-LEFT)"
    },
    {
      "nodeId": "id0203",
      "parentNodeId": "id02",
      "nodeImage": {
        "type": "icon",
        "name": "faExpand",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Zoomable",
      "description": "Use the mouse wheel"
    },
    {
      "nodeId": "id0204",
      "parentNodeId": "id02",
      "nodeImage": {
        "type": "icon",
        "name": "faCompressArrowsAlt",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Center Node on Screen",
      "description": "Double click on node"
    },
    {
      "nodeId": "id03",
      "parentNodeId": "root",
      "expanded": false,
      "nodeImage": {
        "type": "link",
        "data": "https://raw.githubusercontent.com/hdcolelia/be-orgchart/master/src/lib/assets/images/id02.png"
      },
      "title": "Juan Palomino",
      "description": "Otro Gerente"
    },
    {
      "nodeId": "id0301",
      "parentNodeId": "id03",
      "nodeImage": {
        "type": "link",
        "data": "https://raw.githubusercontent.com/hdcolelia/be-orgchart/master/src/lib/assets/images/id03.png"
      },
      "title": "Juan Perez",
      "description": "Jefe"
    },
    {
      "nodeId": "id0302",
      "parentNodeId": "id03",
      "title": "Juan Perez",
      "description": "Jefe"
    },
    {
      "nodeId": "id010101",
      "parentNodeId": "id0101",
      "nodeImage": {
        "type": "icon",
        "name": "faArrowsAlt",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Juan Perez 02",
      "description": "Jefe 02"
    },
    {
      "nodeId": "id010102",
      "parentNodeId": "id0101",
      "nodeImage": {
        "type": "icon",
        "name": "faExpand",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Juan Perez 03",
      "description": "Jefe 03"
    },
    {
      "nodeId": "id010103",
      "parentNodeId": "id0101",
      "nodeImage": {
        "type": "icon",
        "name": "faExpand",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Zoomable",
      "description": "Use the mouse wheel"
    },
    {
      "nodeId": "id010104",
      "parentNodeId": "id0101",
      "title": "Juan Perez 06",
      "description": "Jefe 05"
    },
    {
      "nodeId": "id04",
      "parentNodeId": "root",
      "nodeImage": {
        "type": "icon",
        "name": "faCompressArrowsAlt",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Vertical Child",
      "description": "Only applies if is the last branch",
      "childrenDist": "vertical"
    },
    {
      "nodeId": "id0401",
      "parentNodeId": "id04",
      "nodeImage": {
        "type": "icon",
        "name": "faArrowsAlt",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Draggable",
      "description": "You can simply move it"
    },
    {
      "nodeId": "id0402",
      "parentNodeId": "id04",
      "nodeImage": {
        "type": "icon",
        "name": "faExpand",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Fitable",
      "description": "Press fit button... (UP-LEFT)"
    },
    {
      "nodeId": "id0403",
      "parentNodeId": "id04",
      "nodeImage": {
        "type": "icon",
        "name": "faExpand",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Zoomable",
      "description": "Use the mouse wheel"
    },
    {
      "nodeId": "id0404",
      "parentNodeId": "id04",
      "nodeImage": {
        "type": "icon",
        "name": "faMask",
        "backgroundColor": "#07BEB8",
        "color": "#A9FFF7",
        "scale": 0.6
      },
      "title": "Peter Petrelli",
      "description": "The best Hero"
    }
  ];

  nodes: any = [
    {
      name: 'Sundar Pichai',
      cssClass: 'ngx-org-ceo',
      image: '',
      title: 'Chief Executive Officer',
      childs: [
        {
          name: 'Thomas Kurian',
          cssClass: 'ngx-org-ceo',
          image: 'assets/user2.svg',
          title: 'CEO, Google Cloud',
        },
        {
          name: 'Susan Wojcicki',
          cssClass: 'ngx-org-ceo',
          image: 'assets/user2.svg',
          title: 'CEO, YouTube',
          childs: [
            {
              name: 'Beau Avril',
              cssClass: 'ngx-org-head',
              image: 'assets/user2.svg',
              title: 'Global Head of Business Operations',
              childs: []
            },
            {
              name: 'Tara Walpert Levy',
              cssClass: 'ngx-org-vp',
              image: 'assets/user2.svg',
              title: 'VP, Agency and Brand Solutions',
              childs: []
            },
            {
              name: 'Ariel Bardin',
              cssClass: 'ngx-org-vp',
              image: 'assets/user2.svg',
              title: 'VP, Product Management',
              childs: []
            }
          ]
        },
        {
          name: 'Jeff Dean',
          cssClass: 'ngx-org-head',
          image: 'assets/user2.svg',
          title: 'Head of Artificial Intelligence',
          childs: [
            {
              name: 'David Feinberg',
              cssClass: 'ngx-org-ceo',
              image: 'assets/user2.svg',
              title: 'CEO, Google Health',
              childs: []
            }
          ]
        }
      ]
    },
    {
      name: 'Sundar Pichai',
      cssClass: 'ngx-org-ceo',
      image: 'assets/user2.svg',
      title: 'Chief Executive Officer',
      childs: [
        {
          name: 'Thomas Kurian',
          cssClass: 'ngx-org-ceo',
          image: 'assets/user2.svg',
          title: 'CEO, Google Cloud',
        },
        {
          name: 'Susan Wojcicki',
          cssClass: 'ngx-org-ceo',
          image: 'assets/user2.svg',
          title: 'CEO, YouTube',
          childs: [
            {
              name: 'Beau Avril',
              cssClass: 'ngx-org-head',
              image: 'assets/user2.svg',
              title: 'Global Head of Business Operations',
              childs: []
            },
            {
              name: 'Tara Walpert Levy',
              cssClass: 'ngx-org-vp',
              image: 'assets/user2.svg',
              title: 'VP, Agency and Brand Solutions',
              childs: []
            },
            {
              name: 'Ariel Bardin',
              cssClass: 'ngx-org-vp',
              image: 'assets/user2.svg',
              title: 'VP, Product Management',
              childs: []
            }
          ]
        },
        {
          name: 'Jeff Dean',
          cssClass: 'ngx-org-head',
          image: 'assets/user2.svg',
          title: 'Head of Artificial Intelligence',
          childs: [
            {
              name: 'David Feinberg',
              cssClass: 'ngx-org-ceo',
              image: 'assets/user2.svg',
              title: 'CEO, Google Health',
              childs: []
            }
          ]
        }
      ]
    },
    {
      name: 'Sundar Pichai',
      cssClass: 'ngx-org-ceo',
      image: 'assets/user2.svg',
      title: 'Chief Executive Officer',
      childs: [
        {
          name: 'Thomas Kurian',
          cssClass: 'ngx-org-ceo',
          image: 'assets/user2.svg',
          title: 'CEO, Google Cloud',
        },
        {
          name: 'Susan Wojcicki',
          cssClass: 'ngx-org-ceo',
          image: 'assets/user2.svg',
          title: 'CEO, YouTube',
          childs: [
            {
              name: 'Beau Avril',
              cssClass: 'ngx-org-head',
              image: 'assets/user2.svg',
              title: 'Global Head of Business Operations',
              childs: []
            },
            {
              name: 'Tara Walpert Levy',
              cssClass: 'ngx-org-vp',
              image: 'assets/user2.svg',
              title: 'VP, Agency and Brand Solutions',
              childs: []
            },
            {
              name: 'Ariel Bardin',
              cssClass: 'ngx-org-vp',
              image: 'assets/user2.svg',
              title: 'VP, Product Management',
              childs: []
            }
          ]
        },
        {
          name: 'Jeff Dean',
          cssClass: 'ngx-org-head',
          image: 'assets/user2.svg',
          title: 'Head of Artificial Intelligence',
          childs: [
            {
              name: 'David Feinberg',
              cssClass: 'ngx-org-ceo',
              image: 'assets/user2.svg',
              title: 'CEO, Google Health',
              childs: []
            }
          ]
        }
      ]
    }
  ];
  ngOnInit(){
    const tree = document.getElementById('tree');
            if (tree) {
                var chart = new OrgChart(tree, {
                    nodeBinding: {
                    field_0: "name",
                    img_0: "img"
                    },
                });

                chart.load([
          { id: 1, name: "Farrukh Shahzad", title: "Developer", img: "/assets/farrukh.png" },
                                { id: 2, pid: 1, name: "Rizwan Shah", title: "Sales Manager", img: "/assets/user2.svg" },
                                { id: 3, pid: 1, name: "Adeel Meo", title: "Dev Manager", img: "/assets/user2.svg" },
                                { id: 4, pid: 2, name: "Ehaan Meo", title: "Sales", img: "/assets/user2.svg" },
                                { id: 5, pid: 2, name: "Fayha Khurram", title: "Sales", img: "/assets/user2.svg" },
                                { id: 6, pid: 3, name: "Haider Amir", title: "Developer", img: "/assets/user2.svg" },
                                { id: 7, pid: 3, name: "Amir Khan", title: "Developer", img: "/assets/user2.svg" }
                ]);
            }
  }

  test(element: any){
    console.log('element :>> ', element);
  }

}
