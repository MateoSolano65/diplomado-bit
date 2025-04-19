import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() {}

  login() {
    console.log('User:', this.email);
    console.log('Password:', this.password);

    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.password);
    console.log(
      'User and password saved in localStorage:',
      localStorage.getItem('email'),
      localStorage.getItem('password')
    );

    // ! Sesion Storage
    sessionStorage.setItem('email', this.email);
    sessionStorage.setItem('password', this.password);
    console.log(
      'User and password saved in sessionStorage:',
      sessionStorage.getItem('email'),
      sessionStorage.getItem('password')
    );
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
