import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title: string;
  today = new Date();
  jsonval = {name: 'John', age: 28, address: {city: 'New York', state: 'NY'}};
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  price = 3854.50;

  constructor() { }

  ngOnInit() {
    this.title = 'About Page';
  }

}
