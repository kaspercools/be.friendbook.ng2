
import { MaterialModule } from '@angular/material';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {routes} from './routes.config';
import { AppComponent }  from './app.component';
import { ProfileModule } from './profile/index';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports:      [ BrowserModule, MaterialModule.forRoot(), FlexLayoutModule.forRoot(), RouterModule.forRoot(routes), ProfileModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
