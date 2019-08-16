import { Component, OnInit } from '@angular/core';
import { MyClass } from '../my-class';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  constructor(private myclass: MyClass) { }

  ngOnInit() {
  }

  test() {
    this.myclass.name = 'John Smith';
  }

}
