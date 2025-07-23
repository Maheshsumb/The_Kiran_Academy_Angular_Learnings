import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Data Binding:
  //  1. String Interpolation

  fname: string = "Mahi";
  user = {
    name: "Mahi",
    id: 101
  }

  greet() {
    alert("Hii, Event Binding.....")
  }
  f1(event: Event) {
    alert((event.target as HTMLInputElement).value)

  }

  changeNum(event: Event) {
    alert((event.target as HTMLInputElement).value);
  }

  username: string = "mahi1234"


}
