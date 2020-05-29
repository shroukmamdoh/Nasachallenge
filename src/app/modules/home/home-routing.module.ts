import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LayoutComponent
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
