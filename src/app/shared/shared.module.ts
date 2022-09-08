import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradientSeparatorComponent } from './components/gradient-separator/gradient-separator.component';



@NgModule({
  declarations: [
    GradientSeparatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GradientSeparatorComponent
  ]
})
export class SharedModule { }
