import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ThanksComponent } from './thanks/thanks.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { KeralapackageComponent } from './keralapackage/keralapackage.component';
import { UpdateComponent } from './update/update.component';
import { BookpackageComponent } from './bookpackage/bookpackage.component';
import { TamilnadupackageComponent } from './tamilnadupackage/tamilnadupackage.component';
import { LehpackageComponent } from './lehpackage/lehpackage.component';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"thanks",component:ThanksComponent},
  {path:"admin",component:AdminComponent},
  {path:"deleteuser",component:DeleteuserComponent},
  {path:"updateuser",component:UpdateuserComponent},
  {path:"viewuser",component:ViewuserComponent},
  {path:"keralapackage",component:KeralapackageComponent},
  {path:"update",component:UpdateComponent},
  {path:"bookpackage",component:BookpackageComponent},
  {path:"tamilnadupackage",component:TamilnadupackageComponent},
  {path:"lehpackage",component:LehpackageComponent},
  {path:"adduser",component:AdduserComponent},
  {path:"delete",component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }