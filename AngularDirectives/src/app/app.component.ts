import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isVisible: boolean = true
  btnTxt: string = 'Hide'
  changeVisibility() {
    this.isVisible = !this.isVisible
    if (this.isVisible) {
      this.btnTxt = 'Hide'
    } else {
      this.btnTxt = 'Show'
    }
  }

  // For

  rolls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


  // student: { name: string, age: number, rollNo: number }[] = [];
  student = [{
    name: 'John',
    age: 20,
    rollNo: 101
  },
  {
    name: 'Rahul',
    age: 21,
    rollNo: 102
  },
  {
    name: 'Rohan',
    age: 22,
    rollNo: 103
  },
  {
    name: 'Rahul',
    age: 21,
    rollNo: 104
  }]

  // Switch
  num = 1

  one() {
    this.num = 1
  }
  two() {
    this.num = 2
  }
}
