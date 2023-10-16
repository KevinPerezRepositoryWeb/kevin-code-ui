import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { AuthRouting } from './auth.routing';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
  
    SingUpComponent,
       SingInComponent
  ],
  imports: [
    CommonModule,
    AuthRouting,
    SharedModule
  ]
})
export class AuthModule { }
