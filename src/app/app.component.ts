import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  regform = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  formsub() {
    // TODO: Use EventEmitter with form value
    alert("form is submitted")
  }
  get firstname() {
    return this.regform.get('firstname');
  }
  get lastname() {
    return this.regform.get('lastname');
  }
  get email() {
    return this.regform.get('email');
  }
  get password() {
    return this.regform.get('password');
  }
}
