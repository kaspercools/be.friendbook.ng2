
import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProfileOverviewComponent }  from './overview/overview.component';
import { ProfileCreateComponent, ProfileEditComponent } from './detail/detail.component';
import { ProfileCardComponent } from './card/card.component';

import { ProfileService }  from './services/profiles.service';
import { routing } from './routes.config';


@NgModule({
  imports:      [ routing, BrowserModule,FormsModule, MaterialModule.forRoot(), FlexLayoutModule.forRoot()],
  declarations: [ ProfileOverviewComponent, ProfileCreateComponent, ProfileEditComponent,ProfileCardComponent ],
  providers:    [ProfileService], //nodig voor DI!,
  exports:      [ ProfileOverviewComponent, ProfileCreateComponent, ProfileEditComponent,ProfileCardComponent]
})
export class ProfileModule { }