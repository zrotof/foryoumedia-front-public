import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveContainerComponent } from './components/live-container/live-container.component';

const routes: Routes = [
  {path:'', component: LiveContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LiveRoutingModule { }