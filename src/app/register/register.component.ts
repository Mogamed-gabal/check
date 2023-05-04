import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  err:Boolean=false
  isLoading:Boolean=false
  token:any
  isError:Boolean=false
errMessage:any=''  
errConfirm:string=''
isNotConfirm:Boolean=false

  constructor( private AuthService:AuthService,private Router:Router
){}
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null ,[Validators.required,Validators.minLength(6) ,Validators.maxLength(25)]),
    ssid:new FormControl(null,    [Validators.required,Validators.min(14),Validators.max(14)]),
    password:new FormControl(null, [Validators.required]),
    confirmPassword:new FormControl(null, [Validators.required]),
    phone:new FormControl(null,[Validators.required,Validators.pattern('^012[0-9]{8}$')]),
    email:new FormControl(null,[Validators.required,Validators.email]),

  })
  sendData(registerForm:FormGroup)
  {
    this.isLoading=true 
    console.log(this.registerForm.value)
    this.AuthService.signUp(this.registerForm.value).subscribe({
      next:(res)=>{
        const pass=this.registerForm.get('password')?.value
        const confirmPassword=this.registerForm.get('confirmPassword')?.value
        if(pass==confirmPassword)
        {
          this.isNotConfirm=true
          const check=res.token
        if(check)
        {
          this.isLoading=false
          console.log('success')
          this.Router.navigate(['/login'])
        }else
        {
          this.isLoading=false
          this.isError=true
          this.errMessage=res
          console.log(this.errMessage)
        }
        }else
        {
          this.isNotConfirm=true
          this.errConfirm=`your passConfirm dos'nt match withyourpass`
        }
       
      }
    })
  }
  ngOnInit(): void {
    
  }
}
