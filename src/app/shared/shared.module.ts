import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    MaterialModule

  ]
})
export class SharedModule { }
