import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { MainPageComponent } from './components/main-page/main-page.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainPageComponent
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
export class HomeRoutingModule {}
