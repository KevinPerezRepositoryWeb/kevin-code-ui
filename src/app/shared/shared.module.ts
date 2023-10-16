import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NewFolderComponent } from './components/new-folder/new-folder.component';



@NgModule({
  declarations: [
    NavigationComponent,
    BreadcrumbComponent,
    NewFolderComponent
  ],
  imports: [
    
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavigationComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class SharedModule { }
