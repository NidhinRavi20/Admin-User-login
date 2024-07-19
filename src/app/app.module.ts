import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDetailsComponent } from './Admin/admin-details/admin-details.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSignupComponent } from './Forms/admin-signup/admin-signup.component';
import { UserSignupComponent } from './Forms/user-signup/user-signup.component';
import { AdminFormComponent } from './Admin/admin-form/admin-form.component';
import { UserFormComponent } from './User/user-form/user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminLoginComponent,
    AdminDetailsComponent,
    UserLoginComponent,
    UserDetailsComponent,
    AdminSignupComponent,
    UserSignupComponent,
    AdminFormComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
