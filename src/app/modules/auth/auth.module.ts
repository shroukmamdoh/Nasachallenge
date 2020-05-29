import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {
  NbCardModule,
  NbSpinnerModule,
  NbIconModule,
  NbFormFieldModule,
  NbButtonModule,
  NbInputModule,
  NbLayoutModule,
  NbTabsetModule
} from '@nebular/theme'
import { RouterModule, Params } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, SignupComponent, LayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbSpinnerModule,
    NbIconModule,
    NbFormFieldModule,
    NbButtonModule,
    NbInputModule,
    NbLayoutModule,
    NbTabsetModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent
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
