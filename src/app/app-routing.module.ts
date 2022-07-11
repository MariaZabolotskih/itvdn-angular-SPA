import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { GroupMaintenanceComponent } from './groups-maintenance/groups-maintenance.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'groups-list/:count', component: GroupsListComponent },
  { path: 'group-detail/:group', component: GroupDetailComponent },
  { path: 'groups-maintenance', component: GroupMaintenanceComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
