import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaModule } from '../spa/spa.module';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SpaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
