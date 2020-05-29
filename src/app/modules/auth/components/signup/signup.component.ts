import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'app-auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private toastr: NbToastrService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  showToast(position, status) {
    this.toastr.show(status || 'attention', 'Sign up feature will be coming soon..', {
      position,
      status,
    });
  }

  signUp() {
    this.showToast('bottom-end', 'info')
    /*
     * to do
     */
  }
}
