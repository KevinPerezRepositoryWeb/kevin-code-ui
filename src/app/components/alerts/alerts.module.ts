import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginationComponent } from './pagination/pagination.component';
import { DetailCodeComponent } from './detail-code/detail-code.component';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    SnackbarComponent,
    PaginationComponent,
    DetailCodeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    PaginationComponent
  ]
})
export class AlertsModule { }
