import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms'
import {
  NbCardModule,
  NbSpinnerModule,
  NbIconModule,
  NbFormFieldModule,
  NbButtonModule,
  NbInputModule
} from '@nebular/theme'
import { RouterModule, Params } from '@angular/router'


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignupComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
      }
    ])
  ],
  providers: [AuthService]
})
export class AuthModule { }
