import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private AuthService:AuthService,private Router:Router){}
  isLoading:Boolean=false
  err:Boolean=false
  errMessage:string=''
  token:any
  loginForm:FormGroup=new FormGroup({
    // phone:new FormControl(null,[Validators.required,Validators.pattern('^012[0-9]{8}$')]),
    ssid:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
  })
  sendData(loginForm:FormGroup)
  {
    this.isLoading=true
    this.AuthService.signIn(this.loginForm.value).subscribe({
      next:(res)=>{
        if(res.message==='Logged In')
        {
          console.log(res)
          this.Router.navigate(['/Home'])
          localStorage.setItem('token',res.token)
        }else
        {
          console.log(res)
            this.err=false
          this.errMessage=res
        }
      }
    })
    console.log(loginForm.value)
  }
  ngOnInit(): void {
    
  }
}
