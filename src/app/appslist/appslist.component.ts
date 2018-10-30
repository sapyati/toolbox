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
      { CategoryName: "Beverages", Description: "Coffees, teas" },
      { CategoryName: "Condiments", Description: "Sweet and savory sauces" },
      {  CategoryName: "Confections", Description: "Desserts and candies" },
      { CategoryName: "Cheeses",  Description: "Smetana, Quark and Cheddar Cheese" },
      { CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" },
      {CategoryName: "Beverages", Description: "Beers, and ales" },
      { CategoryName: "Condiments", Description: "Selishes, spreads, and seasonings" },
      {CategoryName: "Confections", Description: "Sweet breads" },
      {CategoryName: "Cheeses",  Description: "Cheese Burger" },
      {CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" }
     ];
     // this.sort(this.column);
  }
}


