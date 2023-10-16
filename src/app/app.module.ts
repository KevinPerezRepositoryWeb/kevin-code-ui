import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './components/pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertsModule } from './components/alerts/alerts.module';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    AuthModule,
    PagesModule,
    BrowserModule,
    SharedModule,
    AlertsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
