import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  isAuthenticated!: boolean;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.authenticatedConfirm();
  }
  authenticatedConfirm(): void {
    this.isAuthenticated = this.userService.isAuthenticated();
  }

  logout(): void {
    this.userService.logout().subscribe(
      (res) => {
        console.log(res);
        this.isAuthenticated = false;
        localStorage.clear();
      },
      (err) => {
        console.log('ps no funciono');
        localStorage.clear();
      }
    );
  }
}
