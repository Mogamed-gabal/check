import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgwWowModule } from 'ngx-wow';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgrtPasswordComponent } from './forgrt-password/forgrt-password.component';
import { CheckOtpComponent } from './check-otp/check-otp.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { RestPassComponent } from './rest-pass/rest-pass.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { ChooseTypeComponent } from './choose-type/choose-type.component';
import { ChieldRegisterationComponent } from './chield-registeration/chield-registeration.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    ForgrtPasswordComponent,
    CheckOtpComponent,
    RestPassComponent,
    ChooseTypeComponent,
    ChieldRegisterationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgwWowModule,
    HttpClientModule,
    NgxOtpInputModule,
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
