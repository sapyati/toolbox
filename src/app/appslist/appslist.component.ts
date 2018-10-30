import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import { CategoryPipe } from './bold.pipe';
@Component({
  selector: 'app-appslist',
  templateUrl: './appslist.component.html',
  styleUrls: ['./appslist.component.css'],
})
export class AppslistComponent {
  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  constructor() { }

  ngOnInit() {
    this.records= [
      { CategoryName: "huddle", imageUrl: "https://cdn3.iconfinder.com/data/icons/iconano-web-stuff/512/109-External-512.png" },
      { CategoryName: "O365", imageUrl: "https://png.pngtree.com/svg/20170904/url_650529.png" },
      {  CategoryName: "peopleSoft", imageUrl: "https://png.pngtree.com/svg/20170904/url_650529.png" },
      { CategoryName: "TalentNext",  imageUrl: "https://png.pngtree.com/svg/20170904/url_650529.png" },
      { CategoryName: "Refer", imageUrl: "https://png.pngtree.com/svg/20170904/url_650529.png" },
      {CategoryName: "Etravel", imageUrl: "https://png.pngtree.com/svg/20170904/url_650529.png" },
      { CategoryName: "Health+", imageUrl: "https://png.pngtree.com/svg/20170904/url_650529.png" },
      {CategoryName: "Radio", imageUrl: "https://png.pngtree.com/svg/20170904/url_650529.png" },
      {CategoryName: "Maganize",  imageUrl: "https://png.pngtree.com/svg/20170904/url_650529.png" },
      {CategoryName: "Ebooks", imageUrl: "https://png.pngtree.com/svg/20170904/url_650529.png" }
     ];
     // this.sort(this.column);
  }
}


