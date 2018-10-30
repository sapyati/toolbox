import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appslist',
  templateUrl: './appslist.component.html',
  styleUrls: ['./appslist.component.css']
})
export class AppslistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// -
function expand() {
  $(".search").toggleClass("close");
  $(".input").toggleClass("square");
  if ($('.search').hasClass('close')) {
    $('input').focus();
  } else {
    $('input').blur();
  }
}
$('button').on('click', expand);

}
