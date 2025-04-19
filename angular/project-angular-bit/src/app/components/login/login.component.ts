import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor() {}

  login() {
    console.log('User:', this.email);
    console.log('Password:', this.password);
  }

  reset() {
    this.email = '';
    this.password = '';
    console.log('Form reset');
    
  }
  onSubmit() {
    console.log('Form submitted');
    this.login();
    this.reset();
  }
  
}
