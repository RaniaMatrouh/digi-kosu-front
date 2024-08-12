import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KosuFormComponent } from './kosu-form/kosu-form.component';
import { IncidentAddComponent } from './incident-add/incident-add.component';
import { KosuListComponent } from './kosu-list/kosu-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IncidentSummaryComponent } from './incident-summary/incident-summary.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { KosuManagementComponent } from './kosu-management/kosu-management.component';
import { IncidentManagementComponent } from './incident-management/incident-management.component';

const routes: Routes = [
  { path: 'kosu', component: KosuFormComponent },
  { path: 'incident', component: IncidentAddComponent },
  { path: 'list', component: KosuListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'incidentlist', component: IncidentSummaryComponent },
  { path: 'admin', component: AdminHomeComponent, children: [
    { path: 'users', component: UserManagementComponent },
    { path: 'kosu', component: KosuManagementComponent },
    { path: 'incidents', component: IncidentManagementComponent },
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
