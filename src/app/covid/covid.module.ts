import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidComponent } from './covid/covid.component';



@NgModule({
  declarations: [CovidComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CovidComponent
  ]
})
export class CovidModule { }
