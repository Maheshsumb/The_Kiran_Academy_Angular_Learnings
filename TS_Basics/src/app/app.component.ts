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



    // Day 2 TS Basics
    console.log("====================")
    console.log("Conditionals");


    let isValid: boolean = true
    if (isValid) {
      console.log('Valid......')
    }

    let gender = 'male'
    if (gender == 'mail') {
      console.log('Gender is Male')
    }
    else if (gender = 'female') {
      console.log('Gender is Female')
    }
    else {
      console.log("Gender is other");

    }
    console.log("====================")
    console.log("====================")
    console.log("Switch");

    let day: string = 'suntay'
    switch (day) {
      case 'sunday': console.log("sunday")
        break
      case 'monday':
        console.log('monday')
        break
      case 'Tuesday':
        console.log('Tuesday')
        break
      default:
        console.log('other')


    }
    console.log("====================")

    console.log("====================")
    console.log("Looping");

    console.log("For");

    // For
    for (let i = 0; i < 10; i++) {
      console.log(i)

    }

    console.log("While");
    // While
    let j = 10;
    while (j <= 20) {
      console.log(j)
      j++
    }

    // Do while

    console.log("Do While");
    let k = 20;
    do {
      console.log(k)
      k--;
    } while (k >= 10)

    // For each

    let arr = ['ram', 'sham', 'radha']
    console.log("For Each");

    for (let i of arr) {
      console.log(i)
    }
    arr.forEach(element => {
      console.log(element)
    });

    let p = [{
      id: 101,
      name: 'ram',
      age: 21
    }, {
      id: 102,
      name: "sham",
      age: 25
    },
    {
      id: 103,
      name: 'radha',
      age: 29
    }
    ]

    for (let i of p) {
      console.log(i.id, i.name, i.age)

    }
    console.log("====================")


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


