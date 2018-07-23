import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  img = "http://ih-platform.s3.amazonaws.com/images/users/avatars/thumb/3150.jpg?1531153158"
}
