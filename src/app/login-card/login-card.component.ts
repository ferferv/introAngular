import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email = document.getElementsByName('email')

  saluda() {
    this.email = document.getElementsByName('email')
    alert(this.email);
  }

}
