import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDetailsComponent } from './Admin/admin-details/admin-details.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { AdminSignupComponent } from './Forms/admin-signup/admin-signup.component';
import { UserSignupComponent } from './Forms/user-signup/user-signup.component';

const routes: Routes = [
  {path : '', component : MainComponent},
  {path : 'admin-signup', component : AdminSignupComponent},
  {path : 'user-signup', component : UserSignupComponent},
  {path : 'admin-login', component : AdminLoginComponent},
  {path : 'admin-details', component : AdminDetailsComponent},
  {path : 'user-login', component : UserLoginComponent},
  {path : 'user-details', component : UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
