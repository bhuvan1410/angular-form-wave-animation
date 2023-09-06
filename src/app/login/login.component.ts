import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  login() {
    if (this.username === 'user' && this.password === 'password') {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your username and password.');
    }
  }
}

