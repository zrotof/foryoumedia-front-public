import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CoreRoutingModule } from './core-routing.modules';
import { CarouselModule } from 'primeng/carousel';



import { HomeHeroComponent } from './components/home/home-hero/home-hero.component';
import { HomeLiveComponent } from './components/home/home-live/home-live.component';
import { HomeBestProgramsComponent } from './components/home/home-best-programs/home-best-programs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeHeroComponent,
    HomeLiveComponent,
    HomeBestProgramsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CarouselModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeBestProgramsComponent
  ]
})
export class CoreModule { }
