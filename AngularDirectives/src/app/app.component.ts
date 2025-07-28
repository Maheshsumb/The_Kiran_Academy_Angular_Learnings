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


  // Attribute Directives
  textRed = 'red'
  textYellow = 'yellow'
  textColor = 'cyan'

  username = ''
  password = ''
  textMsg = ''
  login() {
    if (this.username != 'ram') {

      this.textColor = 'blue'
      this.textMsg = 'Invalid Username'
      console.log(this.username, "\t ", this.password, "\t", this.textColor)
    }
    if (this.password != '123') {
      this.textColor = 'red'
      this.textMsg = 'Invalid Password'
      console.log(this.username, this.password, this.textColor)
    }
    if (this.username === 'ram' && this.password === '123') {
      this.textColor = 'green'
      this.textMsg = 'Login Success'
      console.log(this.username, this.password, this.textColor)
      alert("okk")
    }

  }
  isPrimary = false;

  getClassName() {
    if (this.isPrimary) return 'primary'
    return 'secondary'
  }



}
