import { Component, OnInit } from '@angular/core';
import OrgChart from "@balkangraph/orgchart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(){
    // tree customization
    this.treeCustomization();
    // load tree
    this.loadTree();
  }

// #region tree customization 

  /**
   * tree customization
   */
  treeCustomization(){
    OrgChart.templates.ana.plus =
            '<rect x="0" y="0" width="36" height="36" rx="50" ry="50" fill="green" stroke="#aeaeae" stroke-width="1"></rect>'
        + '<line  x1="10" y1="18" x2="25" y2="18" stroke-width="2" stroke="#aeaeae"></line>'
        + '<line x1="18" y1="9" x2="18" y2="27" stroke-width="2" stroke="#aeaeae"></line>'

    OrgChart.templates.ana.minus =
            '<rect x="0" y="0" width="36" height="36" rx="50" ry="50" fill="red" stroke="#aeaeae" stroke-width="1"></rect>'
        + '<line x1="10" y1="18" x2="25" y2="18" stroke-width="2" stroke="#aeaeae"></line>'
    OrgChart.templates.ana.field_2 =
        '<text class="field_2" style="font-size: 14px;" fill="#ffffff" x="125" y="70" text-anchor="middle">{val}</text>';
  }

//#endregion

// #region load tree 

  /**
   * load tree
   */
  loadTree(){
    const tree = document.getElementById('tree');
    if (tree) {
        var chart = new OrgChart(tree, {
            nodeBinding: {
            field_0: "name",
            field_1: "title",
            field_2: "salary",
            img_0: "img"
            }
        });

        chart.load([
  { id: 1, name: "Farrukh Shahzad", title: "Developer", salary:"Salary: 2000", img: "/assets/farrukh.png" },
                        { id: 2, pid: 1, name: "Madiha Yasir", title: "Sales Manager", salary:"Salary: 2000",  img: "https://cdn.balkan.app/shared/anim/1.gif" },
                        { id: 3, pid: 1, name: "Adeel Meo", title: "Dev Manager", salary:"Salary: 1000",  img: "/assets/user.svg" },
                        { id: 4, pid: 2, name: "Ehaan Meo", title: "Sales", salary:"Salary: 3000",  img: "/assets/user.svg" },
                        { id: 5, pid: 2, name: "Fayha Khurram", title: "Sales", salary:"Salary: 4000",  img: "/assets/user.svg" },
                        { id: 6, pid: 3, name: "Haider Amir", title: "Developer", salary:"Salary: 5000",  img: "/assets/user.svg" },
                        { id: 7, pid: 3, name: "Amir Khan", title: "Developer", salary:"Salary: 8000",  img: "/assets/user.svg" }
        ]);
    }
  }

  //#endregion

}
