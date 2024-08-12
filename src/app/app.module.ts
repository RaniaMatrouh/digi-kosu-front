import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KosuFormComponent } from './kosu-form/kosu-form.component';
import { AppRoutingModule } from './app-routing.module';
import { IncidentAddComponent } from './incident-add/incident-add.component';
import { KosuListComponent } from './kosu-list/kosu-list.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { KosuOverviewComponent } from './kosu-overview/kosu-overview.component';
import { IncidentSummaryComponent } from './incident-summary/incident-summary.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { KosuManagementComponent } from './kosu-management/kosu-management.component';
import { IncidentManagementComponent } from './incident-management/incident-management.component';

@NgModule({
  declarations: [
    AppComponent,
    KosuFormComponent,
    IncidentAddComponent,
    KosuListComponent,
    HomeComponent,
    SidebarComponent,
    KosuOverviewComponent,
    IncidentSummaryComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomeComponent,
    UserManagementComponent,
    KosuManagementComponent,
    IncidentManagementComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
