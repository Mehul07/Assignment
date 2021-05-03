import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor( private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router ) { 
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authService.authenticateUser(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(data => {
      if (data && data.value) {
        this.router.navigate(['/dashboard']);
      } else {
        new Error("Invalid User");
        this.loading = false;
      }
    }, 
    (err) => {
      console.log("Invalid user"); 
      this.loading = false;
    }
    );

  }

}
