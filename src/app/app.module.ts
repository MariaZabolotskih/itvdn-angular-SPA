import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaModule } from '../spa/spa.module';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { GroupMaintenanceComponent } from './groups-maintenance/groups-maintenance.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    GroupMaintenanceComponent,
    GroupsListComponent,
    GroupDetailComponent
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
