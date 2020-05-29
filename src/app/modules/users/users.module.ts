import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/profile/user-profile.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
