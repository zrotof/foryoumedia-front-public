import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveContainerComponent } from './components/live-container/live-container.component';
import { LiveRoutingModule } from './live-routing.modules';



@NgModule({
  declarations: [
    LiveContainerComponent
  ],
  imports: [
    CommonModule,
    LiveRoutingModule
  ]
})
export class LiveModule { }
