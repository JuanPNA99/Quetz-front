import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeFormLogin();
  }

  initializeFormLogin(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required]],
      checkButton: [''],
    });
  }

  login(data: any): void {
    delete data.checkButton;
    this.usersService.postLogin(data).subscribe(
      (res) => {
        localStorage.setItem('token', res.access_token);
        console.log(res);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
