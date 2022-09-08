import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplayContainerComponent } from './components/replay-container/replay-container.component';

const routes: Routes = [
  {path:'', component: ReplayContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReplayRoutingModule { }