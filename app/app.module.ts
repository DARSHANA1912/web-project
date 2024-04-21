import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { NodeUtilityService } from './node-utility.service';
import { HttpClientModule } from '@angular/common/http';
import { ThanksComponent } from './thanks/thanks.component';
import { AdminComponent } from './admin/admin.component';

import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UpdateComponent } from './update/update.component';
import { KeralapackageComponent } from './keralapackage/keralapackage.component';
import { BookpackageComponent } from './bookpackage/bookpackage.component';
import { TamilnadupackageComponent } from './tamilnadupackage/tamilnadupackage.component';
import { LehpackageComponent } from './lehpackage/lehpackage.component';
import { CapitalizePipe } from './capitalize.pipe';
import { PhoneValidateDirective } from './phone-validate.directive';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteComponent } from './delete/delete.component';
import { MyhighlightDirective } from './myhighlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ThanksComponent,
    AdminComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    ViewuserComponent,
    UpdateComponent,
    KeralapackageComponent,
    BookpackageComponent,
    TamilnadupackageComponent,
    LehpackageComponent,
    CapitalizePipe,
    PhoneValidateDirective,
    AdduserComponent,
    DeleteComponent,
    MyhighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [NodeUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }