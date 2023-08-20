import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code/code.component';
import { FoldersComponent } from './folders/folders.component';
import { PagesRouting } from './pages.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardsComponent } from './cards/cards.component'; // Importa NgxListDnDModule
import { AlertsModule } from '../alerts/alerts.module';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DirectiveModule } from 'src/app/directives/directive.module';

@NgModule({
  declarations: [
    CodeComponent,
    FoldersComponent,
    CardsComponent,
    CardSliderComponent
  ],
  imports: [
    DirectiveModule,
    CommonModule,
    AlertsModule,
    PagesRouting,
    SharedModule,
    DragDropModule,
  ],
  exports: [
    CodeComponent,
    

  ]
})
export class PagesModule { }
