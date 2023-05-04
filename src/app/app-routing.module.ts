import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgrtPasswordComponent } from './forgrt-password/forgrt-password.component';
import { CheckOtpComponent } from './check-otp/check-otp.component';
import { RestPassComponent } from './rest-pass/rest-pass.component';
import { ChooseTypeComponent } from './choose-type/choose-type.component';
import { ChieldRegisterationComponent } from './chield-registeration/chield-registeration.component';

const routes: Routes = [
{path:'',redirectTo:'Home',pathMatch:'full',title:'Home'},
{path:'choose-type',component:ChooseTypeComponent,title:"choose"},
{path:'register',component:RegisterComponent,title:'Register'},
{path:'chieldRegisteration',component:ChieldRegisterationComponent,title:'chieldRegisteration'},
{path:'login',component:LoginComponent,title:'Login'},
{path:'getPass',component:ForgrtPasswordComponent,title:'GetPass'},
{path:'otp',component:CheckOtpComponent,title:'checkOtp'},
{path:'restpass',component:RestPassComponent,title:'resetPath'},
{path:'nav',component:NavComponent},
{path:'Home',component:HomeComponent,title:'Home'},
{path:'**',component:NotFoundPageComponent,title:'notfoundPage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
