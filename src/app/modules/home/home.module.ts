import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearhComponent } from './components/searh/searh.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';



@NgModule({
  declarations: [HeaderComponent, SearhComponent, FooterComponent, MainPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
