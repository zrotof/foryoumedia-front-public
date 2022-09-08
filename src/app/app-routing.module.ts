import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'accueil', redirectTo: '', pathMatch: 'full' 
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'live',
    loadChildren: () => import('./features/live/live.module').then(m => m.LiveModule)
  },
  {
    path: 'programmes',
    loadChildren: () => import('./features/program/program.module').then(m => m.ProgramModule)
  },
  {
    path: 'replay',
    loadChildren: () => import('./features/replay/replay.module').then(m => m.ReplayModule)
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
