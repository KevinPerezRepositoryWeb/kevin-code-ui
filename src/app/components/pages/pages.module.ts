import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code/code.component';
import { FoldersComponent } from './folders/folders.component';
import { PagesRouting } from './pages.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CodeComponent,
    FoldersComponent
  ],
  imports: [
    CommonModule,
    PagesRouting,
    SharedModule
  ],
  exports: [
    CodeComponent
  ]
})
export class PagesModule { }
