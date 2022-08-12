import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaModule } from '../spa/spa.module';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GroupMaintenanceComponent } from './components/groups-maintenance/groups-maintenance.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth.guard';
import { UserApi } from '../spa/components/users/user-api';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    GroupMaintenanceComponent,
    GroupsListComponent,
    GroupDetailComponent,
    AuthenticatedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    SpaModule
  ],
  providers: [UserService, { provide: UserApi, useExisting: UserService }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
