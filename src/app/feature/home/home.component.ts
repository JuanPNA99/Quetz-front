import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isAuthenticated!: boolean;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.authenticatedConfirm();
  }
  authenticatedConfirm(): void {
    this.isAuthenticated = this.userService.isAuthenticated();
  }
}
