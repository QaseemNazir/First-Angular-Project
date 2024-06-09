// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule, // Add AppRoutingModule here
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
