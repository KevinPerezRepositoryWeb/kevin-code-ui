import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code/code.component';
import { FoldersComponent } from './folders/folders.component';
import { PagesRouting } from './pages.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardsComponent } from './cards/cards.component'; // Importa NgxListDnDModule
import { AlertsModule } from '../alerts/alerts.module';

@NgModule({
  declarations: [
    CodeComponent,
    FoldersComponent,
    CardsComponent
  ],
  imports: [
  
    CommonModule,
    AlertsModule,
    PagesRouting,
    SharedModule,
  ],
  exports: [
    CodeComponent,
    

  ]
})
export class PagesModule { }
