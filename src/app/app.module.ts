import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { } from '@angular/material' ;
import { AppRoutingModule } from './Main/app-routing.module';
import { AppComponent } from './Main/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
