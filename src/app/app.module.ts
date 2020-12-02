import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule}       from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HomeComponent } from './home/home.component';
import { AppmaintenanceComponent } from './appmaintenance/appmaintenance.component';
import { MaintenancelistComponent } from './maintenancelist/maintenancelist.component';
import { EditmaintenanceComponent } from './editmaintenance/editmaintenance.component';
import { ViewmaintenanceComponent } from './viewmaintenance/viewmaintenance.component';

import { CreatebookingComponent } from './createbooking/createbooking.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginsuccessComponent,
    HomeComponent,
    AppmaintenanceComponent,
    MaintenancelistComponent,
    EditmaintenanceComponent,
    ViewmaintenanceComponent
    CreatebookingComponent,
    ViewbookingsComponent,
    UpdatebookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
