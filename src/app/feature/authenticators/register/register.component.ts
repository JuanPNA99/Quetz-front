import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;
  divRegister: boolean = true;
  display: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.initializeFormRegister();
  }

  initializeFormRegister(): void {
    this.formRegister = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]],
      fecha_nacimiento: ['', [Validators.required]],
    });
  }

  register(data: any): void {
    this.usersService.postSignup(data).subscribe(
      (res) => {
        localStorage.setItem('token', res.access_token);
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showTopics() {
    this.divRegister = false;
    this.display = true;
  }
}
