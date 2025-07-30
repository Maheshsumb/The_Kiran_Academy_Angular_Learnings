import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      email: new FormControl('', [Validators.required, Validators.email])
    }
  )
  register() {
    console.log(this.user.value);

  }

}
