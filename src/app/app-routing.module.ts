import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppmaintenanceComponent } from './appmaintenance/appmaintenance.component';
import { EditmaintenanceComponent } from './editmaintenance/editmaintenance.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { MaintenancelistComponent } from './maintenancelist/maintenancelist.component';
import { RegisterComponent } from './register/register.component';
import { ViewmaintenanceComponent } from './viewmaintenance/viewmaintenance.component';

import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { CreatebookingComponent } from './createbooking/createbooking.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'loginsucess', component: LoginsuccessComponent},
  { path: 'registration', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  {path: 'maintenancelist', component: MaintenancelistComponent},
  {path: 'addmaintenance', component: AppmaintenanceComponent},
  {path: 'editmaintenance/:maintenanceId', component: EditmaintenanceComponent},
  {path: 'editmaintenance', component: EditmaintenanceComponent},
  {path: 'viewmaintenance/:maintenanceId', component: ViewmaintenanceComponent},
  {path: 'viewmaintenance', component: ViewmaintenanceComponent}
  {path: '', component: ViewbookingsComponent},
  {path: 'createbooking', component: CreatebookingComponent},
  {path: 'viewbookings', component: ViewbookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
