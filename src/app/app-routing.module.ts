import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from 'src/spa/components/users/registration/registration.component';
import { SignInComponent } from 'src/spa/components/users/sign-in/sign-in.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';
import { GroupMaintenanceComponent } from './components/groups-maintenance/groups-maintenance.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'sing-in', component: SignInComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: 'authenticated',
    component: AuthenticatedComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', canActivateChild: [AuthGuard],  children: [
          { path: 'home', component: HomeComponent },
          { path: 'settings', component: SettingsComponent },
          { path: 'groups-list/:count', component: GroupsListComponent },
          { path: 'group-detail/:group', component: GroupDetailComponent },
          { path: 'groups-maintenance', component: GroupMaintenanceComponent },
        ]
      }, 
    ],
  },
  { path: '', redirectTo: 'sing-in', pathMatch: 'full' },
  { path: '**', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
