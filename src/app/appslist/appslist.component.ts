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
      { CategoryName: "huddle", imageUrl: "../../assets/Layer1.png" },
      { CategoryName: "O365", imageUrl: "https://image.flaticon.com/sprites/new_packs/122625-color-arrow-collection.png" },
      {  CategoryName: "peopleSoft", imageUrl: "https://image.flaticon.com/sprites/new_packs/122625-color-arrow-collection.png" },
      { CategoryName: "TalentNext",  imageUrl: "https://image.flaticon.com/sprites/new_packs/122625-color-arrow-collection.png" },
      { CategoryName: "Refer", imageUrl: "https://image.flaticon.com/sprites/new_packs/122625-color-arrow-collection.png" },
      {CategoryName: "Etravel", imageUrl: "https://image.flaticon.com/sprites/new_packs/122625-color-arrow-collection.png" },
      { CategoryName: "Health+", imageUrl: "https://image.flaticon.com/sprites/new_packs/122625-color-arrow-collection.png" },
      {CategoryName: "Radio", imageUrl: "https://image.flaticon.com/sprites/new_packs/122625-color-arrow-collection.png" },
      {CategoryName: "Maganize",  imageUrl: "https://image.flaticon.com/sprites/new_packs/122625-color-arrow-collection.png" },
      {CategoryName: "Ebooks", imageUrl: "https://image.flaticon.com/sprites/new_packs/122625-color-arrow-collection.png" }
     ];
     // this.sort(this.column);
  }
}


