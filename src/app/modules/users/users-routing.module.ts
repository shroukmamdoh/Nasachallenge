import { UserProfileComponent } from './components/profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
