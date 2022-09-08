import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplayContainerComponent } from './components/replay-container/replay-container.component';
import { ReplayItemComponent } from './components/replay-item/replay-item.component';
import { ReplayRoutingModule } from './replay-routing.modules';



@NgModule({
  declarations: [
    ReplayContainerComponent,
    ReplayItemComponent
  ],
  imports: [
    CommonModule,
    ReplayRoutingModule
  ]
})
export class ReplayModule { }
