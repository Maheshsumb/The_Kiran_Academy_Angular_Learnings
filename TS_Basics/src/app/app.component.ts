import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TS_Basics';


  constructor() {
    let st = 566;
    console.log(st)

    // Call Function
    this.fo()
    this.fop('ksj')
    let n = this.ff(5)
    console.log(n);

  }

  // Declaration of variable
  fname = "Mahesh"

  //Types of Variable
  lname: string = "Kumar"
  age: number = 25
  isMarried: boolean = false
  data = null

  rollNo = [1, 2, 3, 4, 5]

  student = {
    name: "Mahesh",
    age: 25,
    isMarried: false
  }

  studentData = [{
    name: "Mahesh",
    age: 25,
    isMarried: false
  },
  {
    name: "Kumar",
    age: 25,
    isMarried: false
  }]

  // How to declare function
  fo() {

    console.log("In Fo function");

  }

  fop(name: string) {
    console.log('parameter', name);
  }

  ff(n: number) {
    console.log("In ff returning function", n);
    return "return " + n
  }


}
