import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbGlobalPosition } from '@nebular/theme';
@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: NbToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  showToast(position, status) {
    if (status === 'success') {
      this.toastr.show(
        status || 'Success',
        'Welcome in our electronic city.',
        { position, status });
    } else {
      this.toastr.show(
        status || 'Success',
        'Oops!, invalid username or password.',
        { position, status });
    }

  }

  login() {
    if (
      this.form.value.userName === 'user' &&
      this.form.value.password === '12345678'
    ) {
      this.showToast('bottom-end', 'success')
     this.router.navigate(['home', '']);
    } else {
      this.showToast('bottom-right', 'danger')
    }
  }
}
